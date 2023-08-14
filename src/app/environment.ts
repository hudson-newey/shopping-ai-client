export const environment = {
  // specifies whether it should use the api endpoint specified in the environment (true) or the mock api (false)
  production: false,
  // specifies whether monetization techniques will be used to generate revenue
  commercial: false,
  // specifies whether any information about the user is tracked
  // no data is collected if private is set to true
  private: true,
  // the route api endpoint
  apiUrl: 'http://localhost:8080/api',
  brandName: 'Online Shop GPT',
  // used for amazon affiliate links
  affiliateCode: "shoppingas09c-20",
  ebayAffiliateCode: "",
  // the base url of the application
  url: "https://onlineshopgpt.com",
};
