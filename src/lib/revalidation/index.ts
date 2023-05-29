export const revalidatePriceList = async () => {
  const req = await fetch('/revalidate', {
    method: 'POST',
  }).then((res) => console.log(res.json()))
}