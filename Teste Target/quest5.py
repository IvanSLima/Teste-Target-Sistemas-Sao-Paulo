# 5) Escreva um programa que inverta os caracteres de um string.
# IMPORTANTE:

# a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

# b) Evite usar funções prontas, como, por exemplo, reverse;


txt = 'Este texto vai ser invertido'

print(txt[::-1])


def inverter(txt):
    return txt[::-1]


print(inverter('Texto'))
print(inverter('Este tambem precisa ser invertido'))
