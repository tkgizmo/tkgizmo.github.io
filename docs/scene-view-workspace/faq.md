# FAQ

## Before You Buy

### Do I need to write code?

No. Import the package, and the overlay and five [built-in presets](./manual/presets) are ready to use.

### Is it beginner friendly?

Yes. The built-in presets work out of the box, and regex-based [auto-switch rules](./manual/isolate-rules) are there when you want more control.

### Does it change my Scenes or show up in Git diffs?

No. It only changes Editor-side Scene View state. Your Scenes, Prefabs, and assets are never written to, so switching Workspaces leaves no diffs.

### Does it have dependencies or affect my builds?

No. It has no external dependencies and is an Editor-only assembly, so it is never included in your builds.

### Which Unity versions are supported?

Unity 2022.3 and all Unity 6 versions. Snapping settings differ between these versions, and a Workspace saves whichever ones your Editor provides, so the same Workspace file loads correctly in both.

### Can I use it with multiple Scene Views?

It works, but a Workspace belongs to the Editor rather than to one Scene View. Per-view settings, such as the viewpoint, draw mode, and lighting, apply to the Scene View you switched from. Editor-wide settings, such as tools, snapping, and the Gizmos window, change everywhere. The selected Workspace is shared too, so the view you did not switch from will not match its label.

## Using Scene View Workspace

### How do I move my Workspaces to another project?

Workspaces are saved per project, so a new project starts with only the built-in presets. Use [Export / Import](./manual/export-import) to bring them over:

1. In the original project, export your Workspaces and rules.
2. In the new project, import the Workspaces first, then the rules.

If a Workspace with the same name already exists, you can choose **Overwrite**, **Skip**, or **Rename**. Importing Workspaces first matters because each rule switches to a Workspace by name, and you are warned if a rule points to a Workspace that does not exist.

### How do I share Workspaces with my team?

[Export](./manual/export-import) your Workspaces and rules to JSON and commit the files to your repository or hand them around. Teammates import them to review the Scene the same way. Your own settings stay in `UserSettings/`, so each person can still adjust their copy.

### Can I undo a Workspace switch with Ctrl + Z?

No, Undo is not supported. To go back, select the Workspace you were using from the dropdown, or choose **No Workspace** to return to the setup you had before you first applied a Workspace.
