describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33',()=>{
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz0123456789',33),'HIJKLMNOPQRSTUVWXYZABCDEFG hijklmnopqrstuvwxyzabcdefg3456789012');
    });
    it('debería retornar "ABC" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 26',()=>{
      assert.equal(cipher.encode('ABC',26),'FGH');
    });
    it('debería retornar "FGH" para "abc" con offset 26',()=>{
      assert.equal(cipher.encode('abc',26),'fgh');
    });
    it('debería retornar "678" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 10',()=>{
        assert.equal(cipher.encode('123',10),'678');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33',()=>{
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG hijklmnopqrstuvwxyzabcdefg3456789012',33),'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz0123456789');
    });
    it('debería retornar "ABC" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 26',()=>{
      assert.equal(cipher.decode('FGH',26),'ABC');
    });
    it('debería retornar "ABC" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 26',()=>{
      assert.equal(cipher.decode('fgh',26),'abc');
    });
    it('debería retornar "123" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 10',()=>{
      assert.equal(cipher.decode('678',10),'123');
    });
  });
});
