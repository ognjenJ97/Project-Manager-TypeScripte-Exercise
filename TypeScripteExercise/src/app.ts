
/// <reference path="models/drag-drop.ts" />
/// <reference path="models/project.ts" />
/// <reference path="state/project-state.ts" />
/// <reference path="util/validation.ts" />
/// <reference path="component/project-input.ts" />
/// <reference path="component/project-list.ts" />
/// <reference path="component/base-component.ts" />
/// <reference path="decorators/autobind.ts" />



namespace App {

new ProjectInput();
new projectList('active');
new projectList('finished');
}

