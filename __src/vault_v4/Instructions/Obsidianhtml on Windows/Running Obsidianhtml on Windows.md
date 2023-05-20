## Introduction
Obsidianhtml is developed on Linux. While we aim to support it for Windows, there are some design choices in Windows that make it difficult to develop for. This is compounded by the fact that I (the lead developer) don't have easy access to a Windows machine, makes it time consuming to test code changes and fix bugs.

One of the main issues with Windows seems to be the default path limit. It is really easy to hit this path limit if you have a large vault with many nested folders. While this should be fixable by prepending the path with `\\?\`, this makes the posix-based path arithmatic really complex to implement, and many packages in Python don't natively support it, or are buggy in this regard to.

All to say that it might be better to run Obsidianhtml in a linux environment for the best experience.

There are two ways to create a linux environment on Windows:
- [[Running Obsidianhtml via Docker|Docker]]
- [[Use WSL to run Obsidianhtml|WSL]]

