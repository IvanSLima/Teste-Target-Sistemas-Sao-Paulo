# 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

# IMPORTANTE:
# Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;


Termo1 = int(0)
Termo2 = int(1)
Termo3 = int(0)
print('-' * 42)
print(' ' * 3, 'Consulta da Sequência de Fibonacci')
print('-' * 42)
Valor = int(input('Digite um número: '))
while Valor > Termo3:
    Termo3 = Termo1 + Termo2
    Termo1 = Termo2
    Termo2 = Termo3
if Valor == 0 or Valor == 1:
    print('O número faz parte da sequência de Fibonacci.')
elif Valor == Termo3:
    print('O número faz parte da sequência de Fibonacci.')
else:
    print('O número digitado não faz parte da sequência de Fibonacci.')
