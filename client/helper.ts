import * as Blockly from 'blockly'
export function defineBlockWithJsonCustomFields(block:any){
  Blockly.Blocks[block['type']] = {
    init: function() {
      this.jsonInit(block);
      this.imports = block.imports;
      this.template = block.template;
      if(block.init)
        block.init.apply(this)
    }
  }
}

export function defineBlocksWithJsonCustomFields(blocks:any[]){
  blocks.forEach(defineBlockWithJsonCustomFields)
}
