const TextoUtils = require("../src/textoUtils");

describe("TextoUtils", () => {
  test("deve inverter uma string", () => {
    const util = new TextoUtils();

    const resultado = util.inverter("abc");

    expect(resultado).toBe("cba");
  });

  test("deve identificar palindromos ignorando espacos, pontuacao e caixa", () => {
    const util = new TextoUtils();

    expect(util.ehPalindromo("Ame a ema!")).toBe(true);
    expect(util.ehPalindromo("Texto qualquer")).toBe(false);
  });

  test("deve capitalizar a primeira letra de cada palavra", () => {
    const util = new TextoUtils();

    const resultado = util.capitalizar("mArIa dA silVA");

    expect(resultado).toBe("Maria Da Silva");
  });

  test("deve contar as ocorrencias de uma substring", () => {
    const util = new TextoUtils();

    expect(util.contarOcorrencias("banana", "an")).toBe(2);
    expect(util.contarOcorrencias("banana", "")).toBe(0);
  });

  test("deve remover espacos extras", () => {
    const util = new TextoUtils();

    expect(util.removerEspacosExtras("  ola   mundo  ")).toBe("ola mundo");
  });

  test("deve converter texto para slug", () => {
    const util = new TextoUtils();

    expect(util.paraSlug("  Olá, Mundo! Teste  ")).toBe("ola-mundo-teste");
  });

  test("deve truncar texto maior que o tamanho informado", () => {
    const util = new TextoUtils();

    expect(util.truncar("JavaScript", 4)).toBe("Java...");
    expect(util.truncar("Oi", 4)).toBe("Oi");
  });

  test("deve lancar erro ao truncar com tamanho negativo", () => {
    const util = new TextoUtils();

    expect(() => util.truncar("teste", -1)).toThrow(
      "O tamanho não pode ser negativo",
    );
  });

  test("deve contar palavras ignorando espacos extras", () => {
    const util = new TextoUtils();

    expect(util.contarPalavras("  um   dois tres  ")).toBe(3);
  });

  test("deve validar textos formados somente por letras", () => {
    const util = new TextoUtils();

    expect(util.somenteLetras("João")).toBe(true);
    expect(util.somenteLetras("João2")).toBe(false);
  });

  test("deve substituir todas as ocorrencias de um texto", () => {
    const util = new TextoUtils();

    expect(util.substituirTudo("um dois um", "um", "1")).toBe("1 dois 1");
  });

  test("deve lancar erro ao substituir usando alvo vazio", () => {
    const util = new TextoUtils();

    expect(() => util.substituirTudo("teste", "", "novo")).toThrow(
      "O alvo não pode ser vazio",
    );
  });
});