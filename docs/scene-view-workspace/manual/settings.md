# Settings & Data Storage

## Options

![Options in the Workspace Settings window](/scene-view-workspace/SettingsWindow5.png)

- **Track unsaved changes** — Periodically checks whether the Scene View differs from the saved Workspace and shows the `*` marker. Turn this off to remove the cost of this check.

## Data Storage

Workspaces, rules, and the active Workspace selection are saved in your project's `UserSettings/SceneViewWorkspace/` folder.

- The active selection includes the Scene View state from just before you first applied a Workspace. **No Workspace** uses it to return you to that state.
- To share Workspaces or rules with others, use [Export / Import](./export-import).

::: warning Using Git?
Unity's standard `.gitignore` excludes `/UserSettings/`. If your project uses an older template that does not, add `/UserSettings/` to your `.gitignore` so teammates' settings do not conflict.
:::
