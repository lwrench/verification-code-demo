import { v4 as uuidv4 } from 'uuid';

export type Node = {
  key: string;
  node: HTMLInputElement;
}

export class Store {
  refList: Array<Node>;
  
  constructor() {
    this.refList = [];
  }
  
  register(ref: HTMLInputElement) {
    const node: Node = {
      node: ref,
      key: uuidv4()
    }; 
    this.refList.push(node);
    
    return () => {
      this.refList = this.refList.filter(r => r.key !== node.key);
    }
  }
  
  get(index: number) {
    // console.log('list', this.refList)
    return this.refList[index];
  }
}