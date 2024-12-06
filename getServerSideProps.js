export async function getServerSideProps(context) {
  const data = await fetch('https://api.example.com/data');
  return { props: { data } };
}
