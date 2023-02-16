function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(new Response(JSON.stringify({
        user: 'jsp'
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      ));
    }, 2000);
  });
}

export async function GET() {
  return resolveAfter2Seconds();
}