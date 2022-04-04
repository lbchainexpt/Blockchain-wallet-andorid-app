(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{697:function(e,t,o){"use strict";o.r(t);var a=o(1),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("Cosmos Hub Inflation variable modification: Inflation Rate Change")]),e._v(" "),o("p",[o("strong",[e._v("Quick Summary of issue")])]),e._v(" "),o("p",[e._v("There are 6 main variables that control the maximum, minimum, & change of the atom inflation rate for the cosmos hub. These variables can be found inside the mint module via the attached hyperlink: "),o("a",{attrs:{href:"https://github.com/gavinly/CosmosParametersWiki/blob/master/Mint.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/gavinly/CosmosParametersWiki/blob/master/Mint.md"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("In this proposal we will be looking at adjusting the inflation rate change variable.")]),e._v(" "),o("ul",[o("li",[e._v("When the cosmos hub inflation dynamics were originally designed, the goal was for the hub to go from the minimum rate (7%) to the maximum rate (20%) in roughly one year after a shock had unbond occurred. Thus, for the variable “inflation rate change” a value of .13 was chosen. Unfortunately, in practice the variable didn’t work as intended due to the fact the change in the inflation rate for the hub is proportional to the Target Bonded / current bonded ratio.")])]),e._v(" "),o("p",[o("strong",[e._v("How to select “inflation rate change” AKA Maximum Slope of the inflation curve")])]),e._v(" "),o("p",[e._v("The purpose of changing the network's inflation rate is to protect it from unbonding shocks that can threaten to compromise the security of the network. When the bonded ratio gets below the goal bonded ratio (currently at 66% on the hub) the inflation rate & effective yield of staked atoms goes up in order to incentivize holders to bond new ATOMs with a view to securing the network. Inversely, if we regain a desired amount of staked tokens, the yield will drop and thusly decrease effective yields for all delegators. Ideally the inflation rate starts changing fast, optimizing network security over monetary hardness. To figure out what an appropriate selection for the cosmos hub would be, I created excel sheets to run through all the different scenarios to find what value made the inflation rate react in an optimal manner. "),o("strong",[e._v("I came to the conclusion that 1 (AKA 100% per year is the maximum slope of the inflation curve) gave the most ideal characteristics, with the added benefit of simplifying the equation")]),e._v(". I’ll give some examples on how it would react. Since unbonding is what we are protecting against, I will look at flash unbonds while the inflation rate is at the floor due to that being the #1 time of vulnerability.")]),e._v(" "),o("p",[o("strong",[e._v("Scenarios of Shock Unbonds")]),e._v("\n#1. Cosmos hub Bonded ratio flash crashes to 60%, which is not bad, but still 10% below the target. With our current variable of .13, it would take approx. 9.6 years to make it to the ceiling rate of 20%. On the other hand, if this variable was 1, the hub would reach it ceiling 17.2 months after the unbond shock (assuming bonded % stays at 60% the entire time for simplicity).")]),e._v(" "),o("p",[e._v("#2 Cosmos hub Bonded ratio flash crashes to 50%, starting to get a little scary, but only 25% below the 66% target. With our current variable of .13, it would take aprox. 4 years to make it to the ceiling rate of 20%. On the other hand, if this variable was 1, the hub would reach it ceiling 6.4 months after the unbond.")]),e._v(" "),o("p",[e._v("#3 Cosmos hub Bonded ratio flash crashes to 35%, NOT GOOD!!!! We need to get more atoms staked ASAP! With our current variable of .13, it would take aprox 25 months to reach the ceiling rate of 20%. On the other hand, if this variable was 1, the hub would reach its ceiling 3.3 months after the unbond and the inflation rate would be increasing at a rate of 3.91% per month.")]),e._v(" "),o("p",[e._v("All of the data above, graphs, and much more can be found at "),o("a",{attrs:{href:"https://docs.google.com/spreadsheets/d/1ZJWNzkNB7HUG3fsom9UO8bXODao8cJfFHkgdZ12IOnA/edit#gid=0",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.google.com/spreadsheets/d/1ZJWNzkNB7HUG3fsom9UO8bXODao8cJfFHkgdZ12IOnA/edit#gid=0"),o("OutboundLink")],1)]),e._v(" "),o("p",[o("strong",[e._v("Possible Risks / Benefits")])]),e._v(" "),o("p",[e._v("I will split this up into two sections, doing nothing & doing the proposed changes.")]),e._v(" "),o("p",[e._v("Inflation rate Change (Max Slope of inflation curve)")]),e._v(" "),o("p",[e._v("1a) Doing nothing Risks / Benefits: In this case, I do believe there are risks to do nothing. Currently the inflation rate of the hub is not very reactive to unbond shocks (as seen above). This can lead to network security risks if an economic actor with bad intent wanted to try and destabilize the hub. On the other hand, changing any variable within a system can cause unwanted consequences. There is no way to get rid of this risk entirely, luckily the inflation mechanics are fairly simple and easy to model with excel spreadsheets. Additionally, none of these changes will affect the consensus mechanism, they will just impact the minting of new atoms.")]),e._v(" "),o("p",[e._v("1b) Changing rate to 1 Risks / Benefits: As stated above, there are always risks to changing variables within complex systems. Changing this variable will undoubtedly greatly increase the reactivity of the hub to unbonding shocks. Overall, this seems very beneficial due to the extremely slow reaction time of the hub currently. Also, it brings the hub closer to the original goal of 1 year from the min to the max in a unbonding shock scenario. Due to the fact the inflation curve slope is proportional to the goal vs current bonded ratio, it isn’t possible to hit the original goal directly, but this brings it much closer to reality.")]),e._v(" "),o("p",[o("strong",[e._v("Conclusion")])]),e._v(" "),o("p",[e._v("I know there isn’t a right answer for maximum slope. I fully expect this to be fine-tuned over the coming years / decades. Future proposals may adjust this number by a factor of (.5 – 2+) but this gets us in the right ball park just in time for Stargate. ☺")])])}),[],!1,null,null,null);t.default=i.exports}}]);