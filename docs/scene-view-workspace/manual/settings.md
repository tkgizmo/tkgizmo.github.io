# Settings & Data Storage

## Options

![Options in the Workspace Settings window](/scene-view-workspace/SettingsWindow5.png)

- **Track unsaved changes** — Periodically checks whether the Scene View differs from the saved Workspace and shows the `*` marker. Turn this off to remove the cost of this check.

## Data Storage

Workspaces, rules, and the active Workspace selection are saved in your project's `UserSettings/SceneViewWorkspace/` folder.

- Your original Scene View setup, captured the first time you apply a Workspace, is also stored here. It is kept across Editor restarts, but deleting this folder loses it.
- To share Workspaces or rules with others, use [Export / Import](./export-import).

::: warning Using Git?
Unity's standard `.gitignore` excludes `/UserSettings/`. If your project uses an older template that does not, add `/UserSettings/` to your `.gitignore` so teammates' settings do not conflict.
:::
