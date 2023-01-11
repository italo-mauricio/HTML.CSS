
while True:
    sexo = input("Digite um sexo válido: ")

    if sexo == 'm' or sexo == 'f' or sexo == 'o':
        if sexo == 'm':
            print(f"O sexo escolhido foi Masculino!")
            break
        if sexo == 'f':
            print("O sexo escolhido foi Feminino")
            break
        else:
            print("O sexo escolhido foi outros")
            break
    else:
        print("Digite um sexo válido!")

 
