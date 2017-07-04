# Teste Frontend

Leia primeiro todo o projeto, faça sua estimativa de horas para o desenvolvimento e envie um email com o título `[Teste Frontend] Estimativa` para rh@textecnologia.com.br

Quando finalizar o teste, publique tudo no seu Github e envie um email com o título `[Teste Frontend] Finalizado` para rh@textecnologia.com.br contendo o link do repositório do projeto


## Missão

Desenvolver uma **UI (User Interface)** de acordo com o desenho que está na pasta [layout](https://github.com/TExTecnologia/teste-frontend/tree/master/layout)


### Especificação

- Cross browser support (IE11+)
- Consumir [API de veiculos](https://consulta-veiculos.nimble.com.br/v1)
- Criar SPA que tenha...
    - Listagem de veículos
    - Detalhe do veículo
    - Busca
    - Formulário de novo/edição de veículos

### API

Segue abaixo a documentação

```
_id:       string (MongoDB ObjectId)
veiculo:   string
marca:     string
vendido:   bool
```

#### Endpoints

`GET /veiculos`

Retorna todos os veículos

**Exemplo**: `curl https://consulta-veiculos.nimble.com.br/v1/veiculos`

---

`GET /veiculos/{id}`

Retorna os detalhes do veículo

`{id}` é o id do veículo na base de dados

**Exemplo**: `curl https://consulta-veiculos.nimble.com.br/v1/veiculos/592498d4d96bcbc773aac2f7`

---

`GET /veiculos?filters=veiculo@cobalt`

Retorna todos os veículos onde o campo `veiculo` possuí o termo `cobalt`

**Exemplo**: `curl https://consulta-veiculos.nimble.com.br/v1/veiculos/?filters=veiculo@cobalt`

---

`POST /veiculos`

Adiciona um novo veículo

**Exemplo**:

``` bash
curl -H "Content-Type: application/json" \
  -d '{
    "veiculo": "Uno Way Xingu 1.4 EVO F.Flex 8V 5p",
    "marca": "Fiat",
    "ano": 2013,
    "descricao": "UNO WAY XINGU 1.4 EVO F.Flex 8V 5p",
    "vendido": false
  }' \
  https://consulta-veiculos.nimble.com.br/v1/veiculos
```

---

`PUT /veiculos/{id}`

Atualiza os dados de um veículo

**Exemplo**:

``` bash
curl -H "Content-Type: application/json" \
-X PUT -d '{
  "veiculo": "Buggy",
  "marca": "Walk",
  "ano": 2006,
  "descricao": "Buggy",
  "vendido": false
}' \
https://consulta-veiculos.nimble.com.br/v1/veiculos/592323288c1747deadc89ad8
```

---

`PATCH /veiculos/{id}`

Atualiza os dados de um veículo

**Exemplo**:

``` bash
curl -H "Content-Type: application/json" \
-X PUT -d '{
  "ano": 2005
}' \
https://consulta-veiculos.nimble.com.br/v1/veiculos/592323288c1747deadc89ad8
```

---

`DELETE /veiculos/{id}`

Apaga o veículo

**Exemplo**: `curl -X DELETE https://consulta-veiculos.nimble.com.br/v1/veiculos/592323288c1747deadc89ad8`


## Dúvida

Se tiver qualquer dúvida sobre esse teste, envie um email com o título `[Teste Frontend] O assunto que vc deseja` para lagden@textecnologia.com.br
