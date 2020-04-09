import React from "react";
import { Box, Typography, Link as MaterialLink } from "@material-ui/core";
import { Trans } from "react-i18next";
import Localizer from "./Localizer";
import { string, node } from "prop-types";
import { useTranslation } from "react-i18next";

const Link = ({ href, gh, children }) => (
  <MaterialLink
    href={href || `https://github.com/elxris/Turnip-Calculator/issues/${gh}`}
    target="_blank"
    rel="noopener"
  >
    {children}
  </MaterialLink>
);
Link.propTypes = {
  href: string,
  gh: string,
  children: node,
};
Link.defaults = {
  href: undefined,
  gh: undefined,
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      my={4}
      px={4}
      py={2}
      color="bkgs.mainAlt"
      bgcolor="bkgs.contentAlt"
      borderRadius={16}
    >
      <Box my={2}>
        <Typography variant="h5">{t("Usage")}</Typography>
        <Typography variant="body1">
          <Trans i18nKey="buyPriceInfo">
            - The <b>Buy Price</b> value is for your own island. It doesn&#39;t
            matter if you buy it in other island!
          </Trans>
          <br />
          <Trans i18nKey="priceChangeInfo">
            - Prices change <b>twice a day</b>. Be sure to log them. (We save
            your data in your device).
          </Trans>
          <br />
          <Trans i18nKey="guaranteedMinInfo">
            - The <b>Week min</b> value is a guaranteed minimum price you will
            get this week. Wait at least for this price.
          </Trans>
        </Typography>
      </Box>
      <Localizer />
      <Typography variant="body1" align="right">
        v1.7
      </Typography>
    </Box>
  );
};

export default Footer;
