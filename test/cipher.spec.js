describe('cipher', () => {
  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz0123456789', 33), 'HIJKLMNOPQRSTUVWXYZABCDEFG hijklmnopqrstuvwxyzabcdefg3456789012');
    });
    it('debería retornar "FGH" para "ABC" con offset 26', () => {
      assert.equal(cipher.encode('ABC', 26), 'FGH');
    });
    it('debería retornar "fgh" para "abc" con offset 26', () => {
      assert.equal(cipher.encode('abc', 26), 'fgh');
    });
    it('debería retornar "678" para "123" con offset 10', () => {
      assert.equal(cipher.encode('123', 10), '678');
    });
    it('debería retornar "ÈÐÔÚÇØ" para "ÁÉÍÓÚÑ" con offset 33', () => {
      assert.equal(cipher.encode('ÁÉÍÓÚÑ', 33), 'ÈÐÔÚÇØ');
    });
    it('debería retornar "ÆÎÒØÅÖ" para "ÁÉÍÓÚÑ" con offset 26', () => {
      assert.equal(cipher.encode('ÁÉÍÓÚÑ', 26), 'ÆÎÒØÅÖ');
    });
    it('debería retornar "èðôúçø" para "áéíóúñ" con offset 33', () => {
      assert.equal(cipher.encode('áéíóúñ', 33), 'èðôúçø');
    });
    it('debería retornar "æîòøåö" para "áéíóúñ" con offset 26', () => {
      assert.equal(cipher.encode('áéíóúñ', 26), 'æîòøåö');
    });
  });

  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG hijklmnopqrstuvwxyzabcdefg3456789012', 33), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz0123456789');
    });
    it('debería retornar "ABC" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 26', () => {
      assert.equal(cipher.decode('FGH', 26), 'ABC');
    });
    it('debería retornar "gh" para "abc" con offset 26', () => {
      assert.equal(cipher.decode('fgh', 26), 'abc');
    });
    it('debería retornar "123" para "678" con offset 10', () => {
      assert.equal(cipher.decode('678', 10), '123');
    });
    it('debería retornar  "ÁÉÍÓÚÑ" para "ÈÐÔÚÇØ" con offset 33', () => {
      assert.equal(cipher.decode('ÈÐÔÚÇØ', 33), 'ÁÉÍÓÚÑ');
    });
    it('debería retornar  "ÁÉÍÓÚÑ" para "ÆÎÒØÅÖ" con offset 26', () => {
      assert.equal(cipher.decode('ÆÎÒØÅÖ', 26), 'ÁÉÍÓÚÑ');
    });
    it('debería retornar "áéíóúñ" para "èðôúçø" con offset 33', () => {
      assert.equal(cipher.decode('èðôúçø', 33), 'áéíóúñ');
    });
    it('debería retornar "áéíóúñ" para "æîòøåö" con offset 26', () => {
      assert.equal(cipher.decode('æîòøåö', 26), 'áéíóúñ');
    });
  });
});
