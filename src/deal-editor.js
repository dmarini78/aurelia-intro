export class DealEditor {
	activate(path) {
		if(path && path.id) {
			this.id = path.id;
		}
	}
}