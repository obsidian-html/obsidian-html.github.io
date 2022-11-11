From version >3.3.0, this value is deprecated.

The value will be determined instead by opening the folder that [[Configuration Options#obsidian_entrypoint_path_str|obsidian_entrypoint_path_str]] is in, looking for a folder called `.obsidian` and going one folder up if not found, until found.

This was done because users would often misconfigure this setting, which is intended to be equal to the root of the Obsidian vault, not just any folder within the vault.
