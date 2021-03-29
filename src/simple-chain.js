const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(value===undefined) 
    {this.chain.push('( )');
    return this;
  } else { 
    this.chain.push(`( ${value} )`);
    return this;
  }
  },
  removeLink(position) {
    if( isFinite(position) && position > 0 && position < this.chain.length ) {
      this.chain.splice(position-1,1);
      return this;
    }
    else { 
      this.chain =[]; 
      throw Error;
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain =[];
    return result;
  }
};

module.exports = chainMaker;
