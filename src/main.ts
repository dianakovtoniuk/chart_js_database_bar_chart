import Chart from 'chart.js/auto';

interface SumsResponse {
  labels: string[];
  data: number[];
}

async function main(): Promise<void> {
  const response = await fetch('/api/sums');
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  const { labels, data }: SumsResponse = await response.json();

  const canvas = document.getElementById('myChart') as HTMLCanvasElement;

  new Chart(canvas, {
    type: 'bar',
    data: {
      labels,
      datasets: [
        {
          label: 'Year',
          backgroundColor: 'blue',
          borderColor: 'blue',
          data,
        },
      ],
    },
  });
}

main().catch(console.error);
