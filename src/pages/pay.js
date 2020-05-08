import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import Layout from "../components/layout";

const Pay = ({ data: { pay } }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={pay.seoMetaTags} />
      <div className="sheet__inner">
        <h1 className="sheet__title">{pay.title}</h1>
        <p className="sheet__lead">{pay.subtitle}</p>
        <div className="sheet__gallery">
          <Img fluid={pay.photo.fluid} />
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: pay.bioNode.childMarkdownRemark.html,
          }}
        />
        <form
          action="https://www.pagomaster.com/cl/cuenta/?cmd=checkout2"
          method="post"
        >
          <input
            type="hidden"
            name="merchantAccount"
            value="jorgextroncoso@gmail.com"
          />
          <label style={{ height: 40, fontSize: 30, marginBottom: 9 }}>
            {"Ingrese valor a pagar: "}
          </label>
          <input
            type="number"
            name="amount"
            min="2000"
            required
            style={{
              width: "240px",
              height: "40px",
              fontSize: "36px",
              padding: "9px",
              margin: "9px",
            }}
          />
          <input type="hidden" name="currency" value="CLP" />
          <input type="hidden" name="item_id" value="Servicio 2-000"/>
          <input type="hidden" name="setupFee" value="" />
          <input
            type="hidden"
            name="return_url"
            value="http://www.anfergarage.cl"
          />
          <input
            type="hidden"
            name="cancel_url"
            value="http://www.anfergarage.cl"
          />
          <input type="hidden" name="stopNumber" value="" />
          <input type="hidden" name="stopRecurring" value="" />
          <input type="hidden" name="durationType" value="" />
          <input type="hidden" name="duration" value="" />
          <input
            type="hidden"
            name="merchant_logo"
            value="https://www.datocms-assets.com/27399/1588964646-logo-small.png"
          />
          <input type="hidden" name="addresscheckoutstep" value="0" />
          <input
            type="hidden"
            name="reselleraccount"
            value="erick.quiroz@live.com"
          />
          <input type="hidden" name="ccSubscription" value="" />
          <input type="hidden" name="pst" value="1" />
          <input type="hidden" name="ipk" value="1" />
          <input
            type="image"
            name="cartImage"
            alt="cartImage"
            style={{ padding: 6 }}
            src="https://www.pagomaster.com/cl/cuenta/buttons/singleitems/boton_2_comprar.png"
          />
          <a
            href="https://www.flow.cl/btn.php?token=naiak06"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="flow-pago"
              style={{ padding: 9 }}
              src="https://www.flow.cl/img/botones/btn-pagar-celeste.png"
            />
          </a>
        </form>
      </div>
    </article>
  </Layout>
);

export default Pay;

export const query = graphql`
  query PayQuery {
    pay: datoCmsPayPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      photo {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      bioNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
