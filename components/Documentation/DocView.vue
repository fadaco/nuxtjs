<template>
  <v-row id="main" style="flex-wrap: nowrap" class="d-row row">
    <left-menu :style="leftCalcWidth"></left-menu>

    <div :style="rightCalcWidth" class="right">
      <!-- Introduction-->
      <div
        v-if="activeTab == 1 || !isSmallScreen"
        class="block"
        id="introduction"
      >
        <h3>Introduction</h3>

        <p>Learn how to integrate our APIs into your application</p>
        <h3>API Basics</h3>

        <p>
          Our API gives you access to all the features you can use on our
          dashboard and lets you integrate with them in your application. It is
          simple, Restful and easy to integrate with.
        </p>
        <h3>Sample Requests</h3>

        <p>
          We provide sample API calls next to each method using cURL. All you
          need to do is insert your specific parameters, and you can test the
          calls from the command line. See
          <a class="diffLink" href="https://www.baeldung.com/curl-rest"
            >this tutorial</a
          >
          on using cURL with APIs.
        </p>

        <p>
          You can also use Postman if you aren't familiar with cURL. Postman is
          an easy to use API development environment for making HTTP requests.
          Click here to download our Postman Collection to make testing the API
          easier.
        </p>
        <h3>Request and Response</h3>

        <p>
          Both request body data and response data are formatted as JSON.
          Content type for responses will always be application/json. Generally,
          all responses will be in the following format:
        </p>
        <pre>
        <code class="language-json">
{
  "status": [http codes],  // 200, 201, 400, 404, 500
  "message": [string], // Explains the status... Entirely informational. Please only log this but do not use for your checks
  "data": [object]    // contains result of request if present
}
        </code>
    </pre>

        <h3>Keys</h3>

        <table>
          <tr>
            <td>Total</td>
            <td>Number</td>
            <td>
              This is the total number of requests that is available for the Api
              call
            </td>
          </tr>

          <tr>
            <td>per_page</td>
            <td>Number</td>
            <td>
              This is the maximum number of records that will be returned per
              request. This can be modified by passing a new value as a perPage
              query parameter. Default: 100
            </td>
          </tr>
          <tr>
            <td>current_page</td>
            <td>Number</td>
            <td>This is the current page being returned. Default: 1</td>
          </tr>
          <tr>
            <td>last_page</td>
            <td>Number</td>
            <td>This is the last page of the current query</td>
          </tr>
        </table>
      </div>

      <!-- Authentication-->
      <div class="block">
        <h3 id="authentication">Authentication</h3>

        <p>
          Authenticate your API calls by including your bearer token key in the
          Authorization header of every request you make. You can manage your
          API keys from the dashboard or generate one by logging in through a
          rest client like Postman or Insonomia.
        </p>
        <p>
          Authorization headers should be in the following format:
          <br />Authorization: Bearer Token
        </p>
      </div>

      <!-- Errors-->
      <div class="block">
        <h3 id="errors">Errors</h3>

        <p>
          As stated earlier, our API is RESTful and as such, uses conventional
          HTTP response codes to indicate the success or failure of requests.
        </p>

        <p>
          We discuss some common HTTP codes and how they relate to our endpoints
        </p>
        <h4>HTTP Codes</h4>
        <table>
          <tr>
            <td>200,201</td>
            <td>Request was successful and intended action was carried out.</td>
          </tr>
          <tr>
            <td>400</td>
            <td>
              A validation or client side error occurred and the request was not
              fulfilled.
            </td>
          </tr>
          <tr>
            <td>401</td>
            <td>
              The request was not authorized. This can be triggered by passing
              an invalid bearer token key in the authorization header or the
              lack of one
            </td>
          </tr>
          <tr>
            <td>404</td>
            <td>
              Request could not be fulfilled as the request resource does not
              exist.
            </td>
          </tr>
          <tr>
            <td>500, 501, 502, 503, 504</td>
            <td>
              Request could not be fulfilled due to an error on our end. please
              report as soon as you encounter any instance of this.
            </td>
          </tr>
        </table>
      </div>

      <!-- sendotp -->
      <div class="block">
        <h3 id="sendotp">Send OTP Message</h3>
        <p>API Endpoint for sending OTP message as email and sms</p>
        <table>
          <tr>
            <th>Message</th>
            <td>String</td>
            <td>Message to be Sent</td>
          </tr>
          <tr>
            <th>Business Key</th>
            <td>String</td>
            <td>Unique to your business, you can get it from your dashboard</td>
          </tr>
          <tr>
            <th>Recepient Number</th>
            <td>String</td>
            <td>The recepient's Phone number</td>
          </tr>
          <tr>
            <th>Country Code</th>
            <td>String</td>
            <td>
              Dialing code the person resides in - you can get all countries
              dialling code from
              <a class="diffLink" href="#countrycodes">this endpoint</a>
            </td>
          </tr>
          <tr>
            <th>Recepient email</th>
            <td>String</td>
            <td>Recepient's Email</td>
          </tr>
          <tr>
            <th>Is OTP</th>
            <td>boolean</td>
            <td>
              flag to indicate that this is a one time password message and will
              be validated
            </td>
          </tr>
        </table>
        <pre>
            <h4 class="left-header">Sample request</h4>
        <code class="language-json">
curl {otpbase}send-sms
-H "Authorization: Bearer Token"
-H "Content-Type: application/json"
-X POST
-d {
      "message": "Your one time password is ",
      "business_key": "xxxxxxx",
      "recipient_number": "0801234xxxx",
      "country_code": "234",
      "recepient_email": "johndoe@example.com",
      "is_otp": true
   }
        </code>
    </pre>
        <pre>
      <h4 class="left-header">Sample Response</h4>
        <code class="language-json">
{
  "message": "success",
    "data": {
      "transaction_ref": "161218363308110546625"
  }
}
        </code>
    </pre>
      </div>

      <!-- Validate OTP-->
      <div class="block">
        <h3 id="validateotp">Validate OTP</h3>
        <p>API Endpoint for validating OTP</p>
        <table>
          <tr>
            <th>OTP</th>
            <td>String</td>
            <td>The One time password sent to the Recepient</td>
          </tr>
          <tr>
            <th>Transaction Ref</th>
            <td>String</td>
            <td>Reference of the transaction</td>
          </tr>
        </table>

        <pre> <h4 class="left-header">Sample request</h4>  <code class="language-json">
curl {otpbase}validate-otp
-H "Authorization: Bearer Token"
-H "Content-Type: application/json"
-X POST
-d { "otp": "298825",  "transaction_ref": "161190262208012345678" }
</code></pre>
        <pre>  <h4 class="left-header">Sample Response</h4> <code class="language-json">
{
    "message": "OTP is valid and can be used to complete transaction on your platform",
}
        </code> </pre>
      </div>

      <!-- Send sms-->
      <div class="block">
        <h3 id="sendsms">Send Non OTP message</h3>
        <p>API Endpoint for sending OTP message as email and sms</p>
        <table>
          <tr>
            <th>Message</th>
            <td>String</td>
            <td>Message to be Sent</td>
          </tr>
          <tr>
            <th>Business Key</th>
            <td>String</td>
            <td>Unique to your business, you can get it from your dashboard</td>
          </tr>
          <tr>
            <th>Recepient Number</th>
            <td>String</td>
            <td>The recepient's Phone number</td>
          </tr>
          <tr>
            <th>Country Code</th>
            <td>String</td>
            <td>
              Dialing code the person resides in - you can get all countries
              dialling code from
              <a class="diffLink" href="#countrycodes">this endpoint</a>
            </td>
          </tr>
          <tr>
            <th>Recepient email</th>
            <td>String</td>
            <td>Recepient's Email</td>
          </tr>
        </table>
        <pre><h4 class="left-header">Sample request</h4> <code class="language-json">
curl {otpbase}send-sms
-H "Authorization: Bearer Token"
-H "Content-Type: application/json"
-X POST
-d {
    "business_key": "xxxxxxx",
    "recipient_number": "0801234xxxx",
    "country_code": "234",
    "recepient_email": "johndoe@example.com",
    "message": "Your custom message goes here",
   }
    </code>
    </pre>
        <pre> <h4 class="left-header">Sample Response</h4> <code class="language-json">
{
  "message": "success",
    "data": {
      "transaction_ref": "161218363308110546625"
  }
}
        </code> </pre>
      </div>

      <!-- Fetch My Businesses-->
      <div class="block">
        <h3 id="fetchmybusinesses">Fetch My Businesses</h3>
        <p>
          This API enables you fetch The Details for all the Businesses
          registered by a user.
        </p>
        <pre>
            <h4 class="left-header">Sample request</h4>
        <code class="language-json">
curl {otpbase}user/businesses
-H "Authorization: Bearer Token"
-H "Content-Type: application/json"
-X GET
</code>
    </pre>

        <pre>
      <h4 class="left-header">Sample Response</h4>
        <code class="language-json">
{
    "message": "success",
    "data": [
        {
            "app_id": "Yx8ed6FAMG",
            "business_name": "jumia sales",
            "email": "casandra.schmidt@example.net",
            "phone_number": "710-239-0100 x46059",
            "address": null,
            "is_otp": 1,
            "otp_length": 6,
            "otp_type": "numeric",
            "otp_message": "your fav password is ",
            "user_id": 1,
            "is_activeTab": 1,
        },
    ]
}
        </code>
    </pre>
      </div>

      <!-- All Business Transactions-->
      <div class="block">
        <h3 id="allbusinesstransactions">All Business Transactions</h3>
        <p>
          This API enables you fetch The Details for all Business Transactions.
        </p>
        <pre>
            <h4 class="left-header">Sample request</h4>
        <code class="language-json">
curl {otpbase}all-transactions
-H "Authorization: Bearer Token"
-H "Content-Type: application/json"
-X GET
</code>
    </pre>

        <pre>
      <h4 class="left-header">Sample Response</h4>
        <code class="language-json">
{
  "message": "success",
  "data": {
      "current_page": 1,
      "data": [
          {
            "delivery_time": "now",
            "message": "your fav password is  487327",
            "recepient_phone_number": "08012345678",
            "otp": "",
            "business_id": 1,
            "recepient_email": "johndoe@example.com",
            "recepient_country_phone_code": "234",
            "sms_status": 0,
            "email_status": 1,
            "validation_status": 0,
            "transaction_ref": "161018857908012345678",
          }
      ]
    }
 }
      </code>
    </pre>
      </div>

      <!-- Business Records-->
      <div class="block">
        <h3 id="transactions">Single Business Transactions</h3>
        <p>
          The API allows you fetch the your sms and emails that have been sent
          by the business, with receipient details and delivery status.
        </p>
        <p>
          "businessRef" - This is your business unique identifier, You can find
          this on your Dashboard
        </p>
        <pre><h4 class="left-header">Sample request</h4>  <code class="language-json">
curl business-transactions/234/:businessRef
-H "Authorization: Bearer Token"
-H "Content-Type: application/json"
-X GET
        </code>
    </pre>

        <pre>   <h4 class="left-header">Sample Response</h4><code class="language-json">
{
  "message": "success",
    "data": [
      {
        "delivery_time": "888",
        "message": "your fav password is  766663",
        "recepient_phone_number": "8393939",
        "otp": "",
        "business_id": 1,
        "recepient_email": "johndoe@example.com",
        "recepient_country_phone_code": "234",
        "sms_status": 0, // 1 if delivered 0 if fails
        "email_status": 1, // 1 if delivered 0 if fails
        "validation_status": 0,
        "transaction_ref": "16084582548393939",
      }
    ]
  }
}
        </code>
    </pre>
      </div>

      <!-- Countries and OTP-->
      <div class="block">
        <h3 id="countrycodes">Countries, Dialling Codes and Price</h3>
        <p>
          The API allows you fetch the list of countries we support and thier
          dialling codes
        </p>
        <pre>
            <h4 class="left-header">Sample request</h4>
        <code class="language-json">
curl baseurl/countries
-H "Authorization: Bearer Token"
-H "Content-Type: application/json"
-X GET
        </code>
    </pre>

        <pre>
      <h4 class="left-header">Sample Response</h4>
        <code class="language-json">
{
  "message": "success",
  "data": [
    {
        "name": "AFGHANISTAN",
        "phonecode": "93",
        "price": 2.43 //cost per page
    },
    {
        "name": "ALBANIA",
        "phonecode": "355",
        "price": 2.43
    }
  ]
}
        </code>
    </pre>
      </div>
    </div>
  </v-row>
</template>

<script>
import leftMenu from "../Documentation/leftMenu";

export default {
  data() {
    return {
      e1: true,
      menus: [
        { id: 1, name: "Introduction", slug: "introduction" },
        { id: 2, name: "Authentication", slug: "authentication" },
        { id: 3, name: "Errors", slug: "errors" },
        { id: 4, name: "Send OTP Message", slug: "sendotp" },
        { id: 5, name: "Validate OTP", slug: "validateotp" },
        { id: 6, name: "Send non-OTP Message", slug: "sendsms" },
        { id: 7, name: "Fetch My Businesses", slug: "fetchmybusinesses" },
        {
          id: 8,
          name: "allbusinesstransactions",
          slug: "All Business Transactions",
        },
        { id: 9, name: "transactions", slug: "Single Business Transactions" },
        {
          id: 10,
          name: "Countries and Dialling Codes",
          slug: "countrycodes",
        },
      ],
      activeTab: 0,
    };
  },

  computed: {
    isSmallScreen() {
      return this.$vuetify.breakpoint.name == "xs";
    },

    leftCalcWidth() {
      return this.isSmallScreen ? `flex: 0;` : `flex: 20%; `;
    },

    rightCalcWidth() {
      return this.isSmallScreen ? `flex: 100%;` : `flex: 80%; `;
    },
  },

  components: {
    "left-menu": leftMenu,
  },

  methods: {
    showActiveTab(menu) {
      this.activeTab = menu.id;
      Prism.highlightAll();
    },

    clickHandler(href) {
      const offsetTop = document.querySelector(href).offsetTop;
      scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    },
  },

  mounted() {
    Prism.highlightAll();
  },
};
</script>

<style scoped>
.selectDocu {
  width: 400px;

  position: fixed;
  z-index: 900;
  background: #fcfbfd;
}

* {
  box-sizing: border-box;
}

pre {
  /*box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12);*/
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px 0 rgba(93, 48, 175, 0.16),
    0 2px 10px 0 rgba(93, 48, 175, 0.12);
}
.row {
  display: flex;
  height: 85vh;
  overflow-x: scroll;
  margin: 0px;
  padding: 0px;
}
.double-block {
  display: flex;
  flex-wrap: wrap;
}
.double-block-first-item {
  flex: 50%;
}
.double-block-first-item .block {
  width: 100%;
}
.double-block-second-item {
  flex: 50%;
}
.space {
  flex: 5%;
}

.list a {
  z-index: 20;
}

.left {
  /* flex: 20%; */
  position: sticky;
  height: 90vh;
  z-index: 100;
  padding-left: 13px;
}

.right {
  padding-left: 5%;
  /* flex: 80%; */
  overflow-x: auto;
  margin-bottom: 40px;
}

#main {
  font-size: 14px;
  height: 91vh;
  overflow-y: hidden;
  font-family: "Nunito Sans", sans-serif;
}

.block {
  width: 97%;
  margin-top: 70px;
}

h1 {
  font-size: 1em;
  text-align: center;
  color: #eee;
  letter-spacing: 1px;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
  padding: 20px;
}
.nav-container {
  height: 85vh;
  /* overflow-y: auto; */
  width: 300px;
  margin-top: 20px;
  /* transition: all 0.5s linear; */
  border-right: 5px solid #5d30b03d;
}
.nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  height: 50px;
  position: relative;
  background: white;
}
a {
  text-decoration: none;
  display: block;
  height: 100%;
  width: 100%;
  line-height: 50px;
  color: #011b33;
  font-weight: bold;
  padding-left: 25%;
  border-left: 5px solid transparent;
  letter-spacing: 1px;
  transition: none;
  /* transition: all 0.3s linear; */
}

.diffLink {
  text-decoration: none;
  display: inline;
  height: unset;
  width: unset;
  line-height: 0px;
  color: #6439b2;
  font-weight: normal;
  padding-left: 0%;
  border-left: 0px solid transparent;
  letter-spacing: 0px;
  transition: none;
}

.list-small a {
  padding-left: 10%;
  font-size: 0.82rem;
  border-left: 4px solid transparent;
}
.text {
  transition: none;
  /* transition: all 0.4s linear; */
}

td {
  padding: 10px;
}

li:hover .text {
  margin-left: 20px;
}
.active a {
  color: #5d30af;
  border-left: 5px solid #5d30af;
  background-color: #fff;
  outline: 0;
}
li:not(.active):hover a {
  color: #09a5db;
  border-left: 5px solid #fcfcfc;
  background-color: #fff;
}

i[class^="fa"],
.icon {
  position: absolute;
  top: 15px;
  left: 20px;
  font-size: 1.5em;
  transition: none;
  /* transition: all 0.3s linear; */
}

/*tr {*/
/*  background-color: #ffffff;*/
/*  box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);*/
/*}*/

/*td {*/
/*  flex-basis: 10%;*/
/*}*/
@media only screen and (max-width: 860px) {
  .text {
    display: none;
  }
  .nav-container,
  a {
    width: 70px;
  }

  .nav-container:hover > ul > li > a .text {
    display: block;
    margin-top: 10px;
    padding-left: 30%;
  }
  .nav-container:hover > ul > li > a {
    background-color: #fff;
    color: #09a5db;
    width: 300px;
    z-index: 1;
    border-top: 1px solid #5d30af;
    border-bottom: 1px solid #5d30af;
    box-shadow: 0 0 1px 1px #5d30af;
  }

  a:hover {
    width: 300px;
    z-index: 1;
    border-top: 1px solid #5d30af;
    border-bottom: 1px solid #5d30af;
    box-shadow: 0 0 1px 1px #5d30af;
  }
  a:hover .text {
    display: block;
    margin-top: 10px;
    padding-left: 30%;
  }
  .list-small a:hover {
    margin-bottom: -5px;
  }
  .block {
    width: 80%;
  }
}
@media only screen and (max-width: 480px) {
  .nav-container,
  a {
    width: 50px;
  }
  span[class^="icon"] {
    left: 8px;
  }
  .block {
    width: 95%;
  }
}

.theme--light.v-application code {
  background-color: transparent;
  color: currentColor;
}
</style>
