import Layout from "@/components/Layout";
import { useRouter } from "next/router";

const EventPage = () => {
  const router = useRouter();
  console.log(router.query.slug);

  return <Layout title="Events page">event page</Layout>;
};

export default EventPage;
