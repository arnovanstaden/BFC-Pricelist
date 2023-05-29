export const revalidatePriceList = async () => await fetch('/revalidate', {
  method: 'POST',
})