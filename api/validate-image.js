import Tesseract from 'tesseract.js';

export default async function handler(req, res) {
  const { imageUrl } = req.body;

  if (!imageUrl) {
    return res.status(400).json({ status: 'error', message: 'Sem imagem' });
  }

  try {
    const result = await Tesseract.recognize(imageUrl, 'eng');
    const text = result.data.text;

    const match = text.match(/(\d+[,\.]?\d*)/);
    if (!match) return res.status(400).json({ status: 'error', message: 'Valor não encontrado' });

    const valor = parseFloat(match[1].replace(',', '.'));
    const valido = valor >= 15;

    res.status(200).json({
      status: valido ? 'valido' : 'invalido',
      valor: valor.toFixed(2),
    });

  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Erro ao processar imagem' });
  }
}

