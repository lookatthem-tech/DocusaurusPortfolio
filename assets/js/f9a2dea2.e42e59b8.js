"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},i="Configuring a new account",s={unversionedId:"Hardware/Server Installation Guide/006CHCConfigureNewAcct",id:"Hardware/Server Installation Guide/006CHCConfigureNewAcct",title:"Configuring a new account",description:"Warning: This section applies to only new installations. If you are upgrading from server 2.2 or 2.3.1, don't follow these steps.",source:"@site/docs/Hardware/Server Installation Guide/006CHCConfigureNewAcct.md",sourceDirName:"Hardware/Server Installation Guide",slug:"/Hardware/Server Installation Guide/006CHCConfigureNewAcct",permalink:"/docs/Hardware/Server Installation Guide/006CHCConfigureNewAcct",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Hardware/Server Installation Guide/006CHCConfigureNewAcct.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Performing a new installation of CHC Server",permalink:"/docs/Hardware/Server Installation Guide/005CHCNewInstallations"},next:{title:"Deploying licenses for CHC environments",permalink:"/docs/Hardware/Server Installation Guide/007CHCLicenses"}},l={},c=[],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-a-new-account"},"Configuring a new account"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning:")," This section applies to only new installations. If you are upgrading from server 2.2 or 2.3.1, don't follow these steps."),(0,r.kt)("p",null,"After a new installation of the Prysm server, you must create an account, create a user with organizational administrator rights, and create deployments for the appliances in your environment."),(0,r.kt)("p",null,"An account ties together the organization's users, permission groups, and settings. During installation, a Prysm account is created by default but this is a provisioning account. You must create an account for the deployment."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sign in to the Web Admin interface as a provisional user with the user name ",(0,r.kt)("strong",{parentName:"li"},"Provisioning"),". If needed, request the password for the Provisioning user from Prysm Support."),(0,r.kt)("li",{parentName:"ol"},"Navigate to the Accounts page."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Create Account")," to create a new account."),(0,r.kt)("li",{parentName:"ol"},"In the Account Name field, enter an account name, such as your company name."),(0,r.kt)("li",{parentName:"ol"},"After the Account is created, copy the Account ID and email it to ",(0,r.kt)("a",{parentName:"li",href:"mailto:licensing@prysm.com"},"licensing@prysm.com."))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"After you have an entitlement key, from the Accounts page, select the account (or use the Search field to find the account)."),(0,r.kt)("li",{parentName:"ol"},"For the desired account, click ",(0,r.kt)("strong",{parentName:"li"},"Impersonate"),". A message is displayed at the top of the browser that lists the account you are impersonating."),(0,r.kt)("li",{parentName:"ol"},"Navigate to the Licenses page. When the account is not licensed or when the licenses are expired, a warning message is displayed and Prysm is not available for use."),(0,r.kt)("li",{parentName:"ol"},"From the Licenses page, click ",(0,r.kt)("strong",{parentName:"li"},"Activate Server.")),(0,r.kt)("li",{parentName:"ol"},"From the Activation page, click ",(0,r.kt)("strong",{parentName:"li"},"Choose File")," and browse for the entitlement key file provided by Prysm (see Step 1)."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Activate"),".\nIf the file loads successfully, you are returned to the Licenses page, which has been updated based on the entitlement key. You can see the number and type of licenses available.\nIf the entitlement key fails to load, an error message is displayed. Contact Prysm Support for assistance.")),(0,r.kt)("p",null,"An Org","_","Admin user is the technical point of contact for Prysm at a customer site. This user can manage users and user licenses, create snap grids, and adjust settings for their Prysm deployments."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the Users page, click ",(0,r.kt)("strong",{parentName:"li"},"Create User"),"."),(0,r.kt)("li",{parentName:"ol"},"Create a new user with a temporary password. In most cases, the license type for this user is UserLicense."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save")," to confirm and create the user."),(0,r.kt)("li",{parentName:"ol"},"From the Permission Groups page, find the Org","_","Admin group and click ",(0,r.kt)("strong",{parentName:"li"},"Add/Remove Users"),".\nThe Manage Users - Org","_","Admin page is displayed with a list of the users in the Org","_","Admin permission group."),(0,r.kt)("li",{parentName:"ol"},"From the Other Users column, select the user you just created and click ",(0,r.kt)("strong",{parentName:"li"},"Add")," to add it to the Org","_","Admin Permission Group.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Share the sign in and password with the new org","_","admin user."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Customer Hosted Cloud - Application Server Deployment Package"),", edit the ",(0,r.kt)("strong",{parentName:"li"},"SynthesisSettingsManager.exe.config")," file in notepad.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Locate the ",(0,r.kt)("strong",{parentName:"li"},"connectionString")," section of ",(0,r.kt)("strong",{parentName:"li"},"SettingsDataContext")," as highlighted in the following image:"),(0,r.kt)("li",{parentName:"ol"},"Change the ",(0,r.kt)("strong",{parentName:"li"},"source=localhost")," line to ",(0,r.kt)("strong",{parentName:"li"},"source=IP Address of the DB Server or DNS Address of the DB Server"),". (For example, source=192.168.11.46)."),(0,r.kt)("li",{parentName:"ol"},"Replace integrated security=True; with User ID=SQL User;Password=sql","_","password;\nwhere the ",(0,r.kt)("strong",{parentName:"li"},"SQL User")," and ",(0,r.kt)("strong",{parentName:"li"},"sql","_","password")," are the ",(0,r.kt)("strong",{parentName:"li"},"dbowner")," credentials for the SQL server database (scroll left as needed to see the entire field).\nYou must use SQL authentication for this account."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Save")," and ",(0,r.kt)("strong",{parentName:"li"},"close")," the updated SynthesisSettingsManager.exe.config file."))),(0,r.kt)("li",{parentName:"ol"},"Double-click the ",(0,r.kt)("strong",{parentName:"li"},"SynthesisSettingsManager")," application to run the application."),(0,r.kt)("li",{parentName:"ol"},"Under the Load Settings tab, select ",(0,r.kt)("strong",{parentName:"li"},"Browse.")),(0,r.kt)("li",{parentName:"ol"},"Navigate to the Customer Hosted Cloud - Application Server Deployment Package and open the ",(0,r.kt)("strong",{parentName:"li"},"2.7","_","SettingsTemplate.")),(0,r.kt)("li",{parentName:"ol"},"In the Setting Group Name text box, type ",(0,r.kt)("strong",{parentName:"li"},"2.7 Template.")),(0,r.kt)("li",{parentName:"ol"},"From the Account Name list, select the Customer Account you created."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Check")," the As a Group Template check box."),(0,r.kt)("li",{parentName:"ol"},"Select the ",(0,r.kt)("strong",{parentName:"li"},"Generate")," button.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warning:")," The Generate button has no visual indication that it has or has not been clicked. It's very important that you NOT\xa0click ",(0,r.kt)("strong",{parentName:"p"},"Generate")," more than once."),(0,r.kt)("p",null,"After the Preview of the written XML file:section is populated, the template has completed uploading of the Settings Template."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Close the SynthesisSettingsManager.")),(0,r.kt)("p",null,"A deployment ties a specific settings profile to a specific Prysm appliance, effectively activating the appliance."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Make sure you are still impersonating the desired account."),(0,r.kt)("li",{parentName:"ol"},"From the Settings page, select ",(0,r.kt)("strong",{parentName:"li"},"Create Settings Profile"),"."),(0,r.kt)("li",{parentName:"ol"},"From the ",(0,r.kt)("strong",{parentName:"li"},"Settings Template")," list, select a template you added."),(0,r.kt)("li",{parentName:"ol"},"In the Profile Name field, create a name for the Settings Profile name based on the Display Form Factor, the Region or Location of the deployments that will use it, and a descriptor of what the profile is used for. Then click ",(0,r.kt)("strong",{parentName:"li"},"Save"),". For example, ",(0,r.kt)("strong",{parentName:"li"},"C85","_","PrysmSanJose","_","Shared"),"."),(0,r.kt)("li",{parentName:"ol"},"From the Deployment page, click ",(0,r.kt)("strong",{parentName:"li"},"Create Deployment"),"."),(0,r.kt)("li",{parentName:"ol"},"In the Location Name field, enter a unique location that provides insight as to the site where the Prysm appliance will be deployed."),(0,r.kt)("li",{parentName:"ol"},"In the Machine Key field, enter the Prysm Serial Number (not the HP serial number) printed on the sticker. Typically, these are 10-character numeric serial numbers."),(0,r.kt)("li",{parentName:"ol"},"In the Settings Profile field, select the ",(0,r.kt)("strong",{parentName:"li"},"Settings Profile")," that you created in steps 1-2."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Save"),".\nThe Deployment is created and is associated with the Settings Profile."),(0,r.kt)("li",{parentName:"ol"},"Repeat for additional appliances.")),(0,r.kt)("p",null,"Now that the new account is configured, the customer Org Admin can apply licenses to activate the installation, create users, and manage permissions. You can find all the instructions in Prysm's ",(0,r.kt)("a",{parentName:"p",href:"https://help.prysm.com/admin/Default.htm"},"Admin Help Center"),"."))}u.isMDXComponent=!0}}]);