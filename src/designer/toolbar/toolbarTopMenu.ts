import { Save } from "../../images";
import { ITranslations } from "../../core/translations/translations-contract";
import Toolbar, { ToolbarOrientation } from "./toolbar";
import ToolbarButton from "./toolbarButton";

export default class ToolbarTopMenu extends Toolbar {
  public readonly saveButton: ToolbarButton;
  public readonly undoButton: ToolbarButton;
  public readonly redoButton: ToolbarButton;

  constructor(translations: ITranslations) {
    super(ToolbarOrientation.Horizontal);

    this.saveButton = this.addButton({
      icon: Save,
      text: "",
      title: translations["Save"],
      type: "button",
    });
    this.undoButton = this.addButton({
      text: "↩",
      title: translations["Undo"],
      type: "button",
    });
    this.redoButton = this.addButton({
      text: "↪",
      title: translations["Redo"],
      type: "button",
    });
  }
}
