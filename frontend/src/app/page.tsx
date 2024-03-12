import ImageFallback from "@/helpers/ImageFallback";
import IssuerProfile from "@/layouts/profiles/IssuerProfile";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CallToAction from "@/partials/CallToAction";
import SeoMeta from "@/partials/SeoMeta";
import { Button, Feature } from "@/types";
import Link from "next/link";
import { FaCheck } from "react-icons/fa/index.js";


const Home = () => {

  return (
    <>
       
    <div>
          <IssuerProfile />
    </div>
  
  </>
  );
};

export default Home;




