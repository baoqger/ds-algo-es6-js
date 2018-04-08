class LinkedList {
	constructor() {
		this._head = null;
		this._length = 0;
	}
	
	add(value) {
		const node = {
			value,
			next: null,
		};
		if (this._length === 0) {
			this._length = 1;
			this._head = node;
			return;
		};
		
		let current = this._head;
		
		while(current.next !== null) {
			current = current.next;
		}
		
		current = current.next;
		this._length ++; 
	}
	
	addHead(value) {
		let node = {
			value,
			next: this._head,
		};
		this._head = node;
	}
	
	remove(key) {
		if(this._head.value === key) {
			this._head = this._head.next;
			this.length--;
			return;
		}
		
		let current = this._head.next;
		let previous = this._head;
		
		while(current !== null) {
			if(current.value === key) {
				previous.next = current.next;
				this._length--;
				break;
			}
			
			previous = current;
			current = current.next;
		}
	}
}