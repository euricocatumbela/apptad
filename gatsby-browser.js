/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import Amplify from "aws-amplify"
// import awsExports from "./src/aws-exports"
// Amplify.configure(awsExports)

import Amplify, { Auth } from "aws-amplify";
import awsConfig from "./src/aws-exports";
Amplify.configure(awsConfig);
