# Validador de Depósito

Este projeto é uma API que valida imagens de comprovantes de depósito, verificando se o valor é maior que R$15. Desenvolvido para integração com o Bolt.new usando OCR.

## Como usar
Envie uma imagem para a rota `/api/validate-image` via POST com o campo `imageUrl`.
