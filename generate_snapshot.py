#!/usr/bin/env python3
"""
Generate a master snapshot markdown file containing all repository files.
This script creates a single markdown document with the contents of all text-based files.
"""

import os
from pathlib import Path
from datetime import datetime

# Repository root
REPO_ROOT = Path(__file__).parent

# Files and directories to exclude
EXCLUDE_DIRS = {
    '.git', '__pycache__', 'node_modules', 'target', 'dist', 'build',
    '.next', 'out', '.nuxt', '.cache', 'coverage', '.nyc_output',
    'logs', 'tmp', 'temp', 'venv', 'ENV', '.vscode', '.idea',
    '.Rproj.user', 'pids'
}

EXCLUDE_FILES = {
    'package-lock.json', 'Cargo.lock', 'yarn.lock', 'pnpm-lock.yaml',
    '.DS_Store', 'Thumbs.db', 'Desktop.ini', 'generate_snapshot.py',
    'REPO_SNAPSHOT.md'
}

# Binary file extensions to exclude
BINARY_EXTENSIONS = {
    '.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg', '.pdf', '.zip',
    '.tar', '.gz', '.rar', '.bak', '.backup', '.pem', '.key', '.crt',
    '.pyc', '.pyo', '.so', '.dylib', '.db', '.sqlite', '.pid', '.seed',
    '.woff', '.woff2', '.ttf', '.eot', '.otf'
}

def should_include_file(file_path: Path) -> bool:
    """Determine if a file should be included in the snapshot."""
    # Skip hidden files (starting with .)
    if any(part.startswith('.') for part in file_path.parts):
        # But include .env.example, .gitignore, .nvmrc, etc.
        if file_path.name not in {'.env.example', '.gitignore', '.npmrc', '.nvmrc', 
                                   '.tool-versions', '.mise.toml', '.dockerignore'}:
            return False
    
    # Skip excluded directories
    if any(excluded in file_path.parts for excluded in EXCLUDE_DIRS):
        return False
    
    # Skip excluded files
    if file_path.name in EXCLUDE_FILES:
        return False
    
    # Skip binary extensions
    if file_path.suffix.lower() in BINARY_EXTENSIONS:
        return False
    
    # Skip log files
    if file_path.suffix == '.log':
        return False
    
    return True

def get_language_for_extension(suffix: str) -> str:
    """Map file extension to markdown code block language."""
    language_map = {
        '.py': 'python',
        '.js': 'javascript',
        '.jsx': 'jsx',
        '.ts': 'typescript',
        '.tsx': 'tsx',
        '.json': 'json',
        '.md': 'markdown',
        '.yml': 'yaml',
        '.yaml': 'yaml',
        '.sh': 'bash',
        '.bash': 'bash',
        '.toml': 'toml',
        '.css': 'css',
        '.html': 'html',
        '.xml': 'xml',
        '.sql': 'sql',
        '.R': 'r',
        '.r': 'r',
        '.rs': 'rust',
        '.go': 'go',
        '.java': 'java',
        '.c': 'c',
        '.cpp': 'cpp',
        '.h': 'c',
        '.hpp': 'cpp',
        '.cs': 'csharp',
        '.php': 'php',
        '.rb': 'ruby',
        '.swift': 'swift',
        '.kt': 'kotlin',
        '.scala': 'scala',
        '.dockerfile': 'dockerfile',
        '.conf': 'nginx',
        '.csv': 'csv',
        '.txt': 'text',
        '.mjs': 'javascript',
    }
    
    # Special cases for files without extension or specific names
    return language_map.get(suffix.lower(), '')

def generate_snapshot():
    """Generate the master snapshot markdown file."""
    output_file = REPO_ROOT / 'REPO_SNAPSHOT.md'
    
    # Collect all files
    all_files = []
    for root, dirs, files in os.walk(REPO_ROOT):
        root_path = Path(root)
        
        # Filter out excluded directories
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS and not d.startswith('.')]
        
        for file in files:
            file_path = root_path / file
            if should_include_file(file_path):
                rel_path = file_path.relative_to(REPO_ROOT)
                all_files.append(rel_path)
    
    # Sort files for consistent output
    all_files.sort()
    
    # Generate the markdown content
    print(f"Generating snapshot with {len(all_files)} files...")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        # Write header
        f.write("# MAHA Evidence Engine - Complete Repository Snapshot\n\n")
        f.write(f"**Generated:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S UTC')}\n\n")
        f.write("This document contains the complete contents of all text-based files in the repository.\n\n")
        f.write("---\n\n")
        f.write("## Table of Contents\n\n")
        
        # Write table of contents
        for idx, file_path in enumerate(all_files, 1):
            anchor = str(file_path).replace('/', '-').replace('.', '').replace(' ', '-').lower()
            f.write(f"{idx}. [{file_path}](#{anchor})\n")
        
        f.write("\n---\n\n")
        
        # Write each file's contents
        for file_path in all_files:
            full_path = REPO_ROOT / file_path
            
            # Create anchor-friendly filename
            anchor = str(file_path).replace('/', '-').replace('.', '').replace(' ', '-').lower()
            
            f.write(f"## {file_path}\n\n")
            f.write(f'<a id="{anchor}"></a>\n\n')
            f.write(f"**Path:** `{file_path}`\n\n")
            
            try:
                # Determine the language for syntax highlighting
                if file_path.name == 'Dockerfile':
                    language = 'dockerfile'
                elif file_path.name in ['Makefile', 'makefile']:
                    language = 'makefile'
                elif file_path.name.endswith('.config.ts'):
                    language = 'typescript'
                elif file_path.name.endswith('.config.js'):
                    language = 'javascript'
                elif file_path.name.endswith('.config.mjs'):
                    language = 'javascript'
                else:
                    language = get_language_for_extension(file_path.suffix)
                
                # Read and write file contents
                with open(full_path, 'r', encoding='utf-8') as source:
                    content = source.read()
                    
                    f.write(f"```{language}\n")
                    f.write(content)
                    if not content.endswith('\n'):
                        f.write('\n')
                    f.write("```\n\n")
                    
                print(f"  ✓ {file_path}")
                
            except UnicodeDecodeError:
                # Handle files that can't be decoded as UTF-8
                f.write("*[Binary or non-UTF-8 encoded file - content omitted]*\n\n")
                print(f"  ⚠ {file_path} (binary/non-UTF-8)")
            except Exception as e:
                f.write(f"*[Error reading file: {e}]*\n\n")
                print(f"  ✗ {file_path} (error: {e})")
            
            f.write("---\n\n")
    
    print(f"\n✓ Snapshot generated successfully: {output_file}")
    print(f"  Total files included: {len(all_files)}")
    
    # Print file size
    file_size = output_file.stat().st_size
    if file_size < 1024:
        size_str = f"{file_size} bytes"
    elif file_size < 1024 * 1024:
        size_str = f"{file_size / 1024:.2f} KB"
    else:
        size_str = f"{file_size / (1024 * 1024):.2f} MB"
    print(f"  File size: {size_str}")

if __name__ == '__main__':
    generate_snapshot()
