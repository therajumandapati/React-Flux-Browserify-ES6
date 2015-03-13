'use strict';

import q from 'q';

let posts = [{
				title: "Pushing enterprise software out the door quickly",
				link: "pushing-enterprise-software-out-the-door-quickly",
				content: "Me and my colleague were having a conversation about our software industry experiences. One such experience of my friend intrigued me. This blog post is inspired by that conversation. \r\n\r\nIt is true that making sure a new enterprise software is sent out the door quickly is a really big deal. Interesting enough, most enterprises don't get this right. \r\n\r\nReason ? \r\n\r\n>Running after perfection.\r\n\r\nThere are couple of ways we can pull ourselves out of that well if at all we are falling into it. \r\n\r\n\r\n----------\r\n\r\n\r\n### 1. RAD + Agile\r\n\r\n\r\nAbbreviation for Rapid Application Development, RAD is a style of creating software. \r\n\r\nInstead of spending so much time on designing the next 5 years of the project, we should focus on building a working prototype with the knowledge in hand about the project. \r\n\r\nAs the development moves forward, one version at a time, the requirements of the software can be adjusted or re-aligned as more knowledge is gained. This way, the software project emerges into the a well designed usable piece of art just like a beautiful butterfly emerges from a caterpillar after going through series of transformations.\r\n\r\n***One good bite at a time*** as my [friend](http://shanky.azurewebsites.net/) would always say. \r\n\r\nAs a process around RAD, agile or scrum or kanban principles can be applied in order to bring some structure into SDLC. The principles of agile like methodology combined with the prototype hungry RAD style is the right weapon in your hands in order to fight the development battle and helps to make sure that both the clients and end-users are happy.\r\n\r\nRemember, shipping every prototype release is key to gaining knowledge to help transform into the next prototype. \r\n\r\n\r\n----------\r\n\r\n\r\n### 2. Technical Perfection ~ Product Debt\r\n\r\n\r\nIf a project is being Agile and shipping to end user after every sprint, wake up. That's a nice dream. I know there are awesome teams out there who really ship after every sprint. But sometimes, it's easy to slightly shift off track and fall into the well trying to achieve perfection. \r\n\r\n***Right balance*** should exist between *technical perfection* and *product debt*. You should not just concentrate on getting ~99% code coverage and say no to product features. Remember, your code coverage is not gonna bring in the $$$. It's the usable product shipped to customer as quickly as possible is the one keeping you employed. Good amount of unit tests and other suite of tests that give you enough confidence on the product's robustness is the right balance. \r\n\r\nAgain, remember to keep shipping. \r\n\r\n\r\n----------\r\n\r\n\r\n### 3. Get Shit Done\r\n\r\n\r\nI don't know if this is an official and well practiced style of software development. But, I am a huge fan of this style because it is a statement that every single software developer out there who's writing software on a daily basis should say to him/herself. \r\n\r\n> Get. Shit. Done. Period.\r\n\r\nThis is the hybrid style of spearheading a project which combines multiple different principles that are very powerful and essential for the success of a product. \r\n\r\n**Fail** as **fast** as you can. **Change** as **fast** as you can. **Break** **things**. Not materialistic things of course. Get the most important things done first. The things that are essential to taste the sweet scent of early customer feedback. If you need two years to get to market, you should fire everyone who says so.  \r\n\r\n\r\n----------\r\n\r\n\r\nI know of a company who went bankrupt in minutes because they had very bad Continuous Delivery practices. It is really tough to find the right balance between software development best practices and software shipment priority.\r\n\r\n>Many companies are still in business just because of the ***legacy software*** that ***just works*** which ***no developer wants to touch***. You were talking about design patterns ?\r\n\r\n\r\n----------\r\n\r\n***MVP*** (*VenkatapathiRaju, Mandapati*)\r\n\r\n*A passionate software professional focusing hard on the business side.*\r\n",
				date: "March 5, 2015"
			}];

let RemoteSlave = {
	getAllPosts: () => {
		let deferred = q.defer();

		deferred.resolve(posts);

		return deferred.promise;
	},

	getPostByTitle: (title) => {
		let deferred = q.defer();

		let post = posts.filter(p=>p.link === title)[0];

		deferred.resolve(post);

		return deferred.promise;
	}
};

export default RemoteSlave;