const faturamento = {
    'SP': 67836.43,
    'RJ': 36678.66,
    'MG': 29229.88,
    'ES': 27165.48,
    'Outros': 19849.53
  };
  
  const total = Object.values(faturamento).reduce((acc, curr) => acc + curr, 0);
  const percentuais = Object.entries(faturamento).reduce((acc, [estado, valor]) => {
    acc[estado] = (valor / total) * 100;
    return acc;
  }, {});
  
  const tabela = document.createElement('table');
  tabela.className = 'table';
  tabela.innerHTML = `
    <thead class="thead-dark">
      <tr>
        <th>Estado</th>
        <th>Valor (R$)</th>
        <th>Percentual (%)</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      ${Object.entries(faturamento).map(([estado, valor]) => `
        <tr>
          <td>${estado}</td>
          <td>R$ ${valor.toFixed(2)}</td>
          <td>${percentuais[estado].toFixed(2)}%</td>
          <td>
            <div class="progress">
              <div class="progress-bar" role="progressbar" style="width: ${percentuais[estado]}%;" aria-valuenow="${percentuais[estado]}" aria-valuemin="0" aria-valuemax="100">
                ${percentuais[estado].toFixed(2)}%
              </div>
            </div>
          </td>
        </tr>
      `).join('')}
    </tbody>
  `;
  document.body.appendChild(tabela);
  