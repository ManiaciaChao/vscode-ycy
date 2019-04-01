"use strict";
import * as vscode from "vscode";
import * as path from "path";

export class ReminderView {
  private static panel: vscode.WebviewPanel | undefined;

  public static show(context: vscode.ExtensionContext) {
    if (this.panel) {
      this.panel.reveal();
    } else {
      this.panel = vscode.window.createWebviewPanel(
        "yzy",
        "杨子越",
        vscode.ViewColumn.Two,
        {
          enableScripts: true,
          retainContextWhenHidden: true
        }
      );

      const imagePath = vscode.Uri.file(
        path.join(context.extensionPath, "images", "yzy0.jpg")
      ).with({ scheme: "vscode-resource" });

      this.panel.webview.html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>杨子越</title>
</head>
<body style="background:#dc2424;">
    <div style="text-align:center;">
        <div><h1>歇会儿吧大佬，你是不可能写完的</h1></div>
        <div><img src="${imagePath}"></div>
    </div>
</body>
</html>`;

      this.panel.onDidDispose(() => {
        this.panel = undefined;
      });
    }
  }
}
