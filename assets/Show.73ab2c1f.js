import{_ as p}from"./AppLayout.c517f836.js";import c from"./DeleteUserForm.661773bf.js";import l from"./LogoutOtherBrowserSessionsForm.4358a701.js";import{S as s}from"./SectionBorder.3fcbee67.js";import f from"./TwoFactorAuthenticationForm.91fea631.js";import u from"./UpdatePasswordForm.e1f761af.js";import _ from"./UpdateProfileInformationForm.721081d3.js";import{o as e,c as d,w as n,a as i,e as r,b as t,f as a,F as h}from"./app.824ad3af.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./NavLink.aa62a19e.js";import"./DialogModal.d1c290b7.js";import"./SectionTitle.37673a50.js";import"./Modal.e01fe00f.js";import"./DangerButton.451c8fc0.js";import"./InputError.f7b85e45.js";import"./SecondaryButton.945e7931.js";import"./TextInput.27bd834e.js";import"./ActionMessage.c2349c24.js";import"./PrimaryButton.394dce05.js";import"./InputLabel.58cc2b82.js";import"./FormSection.dc0e1912.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},w={key:0},k={key:1},y={key:2},J={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(o,x)=>(e(),d(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[o.$page.props.jetstream.canUpdateProfileInformation?(e(),r("div",w,[t(_,{user:o.$page.props.user},null,8,["user"]),t(s)])):a("",!0),o.$page.props.jetstream.canUpdatePassword?(e(),r("div",k,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),o.$page.props.jetstream.canManageTwoFactorAuthentication?(e(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),o.$page.props.jetstream.hasAccountDeletionFeatures?(e(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{J as default};
