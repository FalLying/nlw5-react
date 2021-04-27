import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { api } from "../../services/api";

export default function episode() {
  const router = useRouter();

  return <h1>{router.query.slug}</h1>;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {slug}
  const {data} = await api.get(`/apisodes/${}`)
  return {
    props: {},
    revalidate: 60 * 60 * 24,
  };
};
