import { Injectable } from '@angular/core';

@Injectable()
export class DefinitionsService {



  definitions = [
    {
      'definition': 'The thoughtful use of computing in humanistic inquiry and the thinking through of computing from the perspective of the traditions of the humanities.'
    },
    {
      'definition': 'Digital humanities is the use of advanced digital technologies (and the extended social and discursive worlds these technologies make possible) to investigate questions in the humanities.'
    },
    {
      'definition': 'Researchers working with digital materials, tools, or methods in the humanities; researchers creating new digital materials, tools, or methods in the humanities; researchers studying computing using humanities methods.'
    },
    {
      'definition': 'All the ways that the humanities and digital technologies intersect.'
    },
    {
      'definition': 'Digital Humanities is the use of digital technologies to generate and answer new questions relevant to humanities scholar and to share and transform scholarship and its modes of creation/dissemination.'
    },
    {
      'definition': 'A diverse and still emerging field that includes the practice of humanities research in and through information technology. It also includes the development of digital educational/research/teaching/archival/publishing resources for the specific use and study of the humanities and interconnected disciplines. The digital humanities is also concerned with an exploration of how humanities may evolve through their engagement with technology.'
    },
    {
      'definition': 'Digital scholarship in the humanities'
    },
    {
      'definition': 'Digital Humanities as a whole is something I am extremely reluctant to define, because any definition will inevitably cause controversy. However, I have not heard any dispute over my work being part of digital humanities, and that work involves computationally analyzing data sets from the field of Slavic linguistics, and de-siloing scholarship in that same field through a collaboratively authored academic wiki.'
    },
    {
      'definition': 'The building and use of digital tools for studying the humanities.'
    },
    {
      'definition': 'The humanities in and for a digital age'
    },
    {
      'definition': 'The digital humanities is about creating people. Creating people who intersect with and apply the tools and methods of computer science using the principles, values, and techniques of the humanities.'
    },
    {
      'definition': 'Making stuff, and using it to collaborate and connect with the public.'
    },
    {
      'definition': 'A community of practice using and critiquing digital tools to further humanities study.'
    },
    {
      'definition': 'Digital Humanities (DH) is an umbrella term for a variety of practices, methodologies, and forms of scholarship unified by a mutual interest in the humanities and the digital. The Digital Humanities, ever plural, at once denote a social community, a tactical term, a mode of research, and an object of research.'
    },
    {
      'definition': 'If you think you are doing it, then you probably are, but the UCLDH definition is: the application of computational methods to humanities research or to cultural heritage; or of humanities research methods to digital phenomena.'
    },
    {
      'definition': 'At its simplest, DH is the utilization of computers and computational tools for the exploration, analysis, and production of humanistic knowledge.'
    },
    {
      'definition': 'The intersection between Arts & Humanities disciplines and technology. A space where new tools are used and developed, and where new ways of looking at and preforming researching become possible. Most of all, it is fun. Fun because it is challenging, each day, every day.'
    },
    {
      'definition': 'As I siad on my blog: Digital Humanities is the discipline born from the intersection between humanities scholarship and computational technologies. It aims at investigating how digital methodologies can be used to enhance research in disciplines such a History, Literature, Languages, Art History, Music, Cultural Studies and many others. Digital Humanities holds a very strong practical component as it includes the concrete creation of digital resources for the study of specific disciplines.'
    },
    {
      'definition': 'Digital Humanities mean, to me, more now than it did back in 2009 when I first did the Day of DH. DH offers a set of tools to pose humanistic inquiry, but it doesnt necessarily offer definitive answers to those questions. Instead it celebrates and records a process of intellectual pursuit that is then distributed and disseminated to the Humanities community and abroad. Engaging in Digital Humanities is also an ethos: collaboration, building knowledge, sharing projects, screwing around. I apply this to my scholarship as well as my teaching. If my work is better, more complex, because of Digital Humanities, so too will my students work benefit from the tools, state of mind, and ethos.'
    },
    {
      'definition': 'The practice of combining emerging digital tools and traditional humanistic study to create new, interactive, integrative, and public ways of disseminating research and discovery.'
    },
    {
      'definition': 'As the studying and building of digital research tools for humanities scholarship. For me, this entails trying to offer informed guidance to the historians who want to use digital research tools (but cant build them) and the developers who can build these digital research tools (but wont be using them).'
    },
    {
      'definition': 'DH allows, maybe even forces, me to think differently about teaching. its a community of learners and thinkers who look at tools as ways to make new tools and knowledge.'
    },
    {
      'definition': 'Digital Humanities is the critical study of how the technologies and techniques associated with the digital medium intersect with and alter humanities scholarship and scholarly communication.'
    },
    {
      'definition': 'Oftener and oftener as ones self-identification with a perceived inflection of study and regard for the world that involves humanities scholarship in digital environments.'
    },
    {
      'definition': 'This is my first time participating in the event. I think of digital humanities as the intersection of computing and the arts.'
    },
    {
      'definition': 'Digital Humanities are the first step towards Future Humanities.'
    },
    {
      'definition': 'I view the Digital Humanities as a constantly changing field, which escapes easy definition - this is has benefits but also presents challenges! Standard definitions talk about the application of information technology to humanities teaching and research - whether that be to develop better ways of doing things or to create new questions and paradigms - but I think that the field also has a key role in articulating how technology is changing scholarship.'
    },
    {
      'definition': 'Digital Humanities is the combination of using digital techniques to better understand and present our understanding of the Humanities. It is about the dissemination of our work, the sharing of knowledge and collaborating to give the best possible chance to a project. Digital Humanities is about the Community, about learning, constantly evolving and being open to new ways of thinking about old questions. It is not, as a friend asked, about building digital humans.'
    },
    {
      'definition': 'Qualitative queries, quantified.'
    },
    {
      'definition': 'The connections made between humans, text, and images that cannot be made in a strictly analog network.'
    },
    {
      'definition': 'The use of digital tools, media and corpora in the humanities, thus changing both the objects and practices in the Humanities.'
    },
    {
      'definition': 'The undertaking of humanities using digital tools and techniques. (But Ive read much better answers previous years.)'
    },
    {
      'definition': 'sudo riverrun past eve'
    },
    {
      'definition': 'When quantification meets representation.'
    },
    {
      'definition': 'The place where technology meets traditional study.'
    },
    {
      'definition': 'In DH, scholars either try to solve to old problems with new means, in an verifiable way by applying algorithms to given data, or they try to find new questions that couldnt have been asked before with traditional means, e.g. checking a theory against huge amounts of data. DH also implies new presentation of data, methods, and results.'
    },
    {
      'definition': 'Digital Humanities captures the passion for the traditional craft and emboldens it to ask new questions of old data in exciting, compelling and innovative ways.'
    },
    {
      'definition': 'Researching the Humanities through digital perspectives, researching digital technologies from the perspective of the Humanities'
    },
    {
      'definition': 'Digital Humanities is to me the use and abuse of technology to potential improve research within the field of humanities. It stretches from a simple blog, to complex corpus tools, to whatever the next person can think of.'
    },
    {
      'definition': 'Digital Humanities is a young field within the Humanities and Technologies, yet not clearly defined. The Digital Humanities take advantage of applying mathematical methods for the analysis of cultural phenomena.'
    },
    {
      'definition': 'For me, digital humanities is thinking through making, as well as writing. More specifically, it’s currently about thinking critically about the impact of digitality on scholarly practice in addition to applying digital techniques to the concerns of the humanities.'
    },
    {
      'definition': 'It is simple. Human use digital signal, namely syllables, more precisely logical syllables for communication. This is the only difference between human and non-human animals, who communicate by exchanging analog or physical signals modulated by their emotion.'
    },
    {
      'definition': 'A community of practice involving anyone who engages with humanities subject areas through critical, reflexive and collaborative development and use of digital technologies.'
    },
    {
      'definition': 'As a social construct.'
    },
    {
      'definition': 'Digital Humanities is more than a methodology.'
    },
    {
      'definition': 'The use of digital methods, tools, resources,and/or models to research, study, and/or mediate what it means to be human. If it must be measured, I prefer to do so by degrees rather than by delineations.'
    },
    {
      'definition': 'Digital Humanities is a field overseeing the work that needs to be done using digital media in order to preserve and interpret the human record.'
    },
    {
      'definition': 'A broad array of practices that seek to understand if/how digital technologies allow us to ask new questions of or think in new ways about our objects of study.'
    },
    {
      'definition': 'Digital Humanities, as a discipline, is a subset of the Humanities. It implies that one engages with digital media--whether they are tools or topics of enquiry--while doing Humanities work.'
    },
    {
      'definition': 'Digital humanities is a gathering term for scholars who embrace technology as a means to explore humanities material as data.'
    },
    {
      'definition': 'its the sum of a lot of separate activities involving doing humanities research and using computers at more or less the same time, and with at least an intermittent element of methodological reflection.'
    },
    {
      'definition': 'I think of digital humanities as an umbrella term that covers a wide variety of digital work in the humanities: development of multimedia pedagogies and scholarship, designing & building tools, human computer interaction, designing & building archives, etc. DH is interdisciplinary; by necessity it breaks down boundaries between disciplines at the local (e.g., English and history) and global (e.g., humanities and computer sciences) levels.'
    },
    {
      'definition': 'Through the things I make'
    },
    {
      'definition': 'The study of the effects of enabling computational technologies upon the social organisational of civilisation.'
    },
    {
      'definition': 'Taking people to bits.'
    },
    {
      'definition': 'Intersectional activities between the humanities and informatics commonly convergent on ever evolving computational technologies'
    },
    {
      'definition': 'Building and/or using advanced digital technologies and methodologies to conduct research in the humanities'
    },
    {
      'definition': 'Digital humanities is a scholarly enterprise which encompasses a field of study, a set of tools, a methodological approach, and a global community, among other things. Digital humanists examine the objects of humanistic study – literature, history, art, language and so forth – using digital tools to carry out the kind of analysis that would be very difficult or impossible to do without the use of technology. Where the value of digital humanities lies, however, is not in the powerful capabilities of the digital tools themselves – as impressive as these may be – but rather in the way that the analyses and visualizations produced by the technology are combined with the skills of critical interpretation, nuanced close analysis, and attentiveness to ambiguity which are born out of a deep grounding in so-called conventional humanities study.'
    },
    {
      'definition': 'I guess I define DH as twofold : Using technology to do Humanities Research and doing Humanities research about Technology. Plus a commitment to the openness of knowledge. Plus a commitment to build new scholarly objects.'
    },
    {
      'definition': 'Making use of the Information Technologies for Humanities research.'
    },
    {
      'definition': 'The ineffably sublime.'
    },
    {
      'definition': 'DH is multiple. DH is part humanities computing which designs, develops, and/or utilizes computing technologies for research and analysis. DH is also a community interested in collaborative projects and sharing knowledge across disciplines. Still, DH goes beyond the instrumentality of technologies, by critically engaging with questions of knowledge formation, dissemination, and preservation.'
    },
    {
      'definition': 'By press.'
    },
    {
      'definition': 'The development, exploration, and evaluation of computer-based technologies and resources for enabling the pursuit of research questions in the humanities.'
    },
    {
      'definition': 'I have come to think about the digital humanities as an umbrella term for a few different things. These include the development of tools and software for research, teaching, and scholarship. In this case every part of the development process and use of these tools is potentially DH scholarship. I would also include the use of any digital tools and software for interpretation and analysis on humanities research questions. Beyond this I would include any work that involves challenging the traditional roles of scholarship and scholarly communication. For example, using blogs to communicate with broader audiences. Lastly, I would suggest that new media studies, that is studies of born digital objects is inherently a subset of work in the digital humanities. In short, any situation in which the idea of the digital touches or engages with work in the humanities.'
    },
    {
      'definition': 'Humanities'
    },
    {
      'definition': 'I define Digital Humanities as that which lies on the continuum that began in orality, and moved through literate or print-based humanities, resulting in contemporary humanistic endeavors. In other words, I dont see it as a break with all that has come before. That said, however, epistemological shifts characterize the digital humanities, distinguishing them from earlier iterations.'
    },
    {
      'definition': 'its what we do.'
    },
    {
      'definition': 'The process of acknowledging, interpreting and engaging with the digital in relation to humanities sources and approaches.'
    },
    {
      'definition': 'A willingness to engage in new modes of exploring humanities problems using interdisciplinary approaches that may go beyond the comfort level of traditional scholars in your core discipline but that seek truth and understanding with all the rigours of academic research.'
    },
    {
      'definition': 'In the last 10 years I would have said something along these lines: As an experienced manager and ICT consultant my approach towards DH is practical. For me DH is about interconnecting researchers (and their collections), software developers and infrastructure providers. As a researcher my aim is different. Then DH is about bringing central questions about the nature of the humanities to light. But now I believe Digital Humanities is coming of age. And in my opinion Digital Humanities has become an intrinsic part of the Humanities. Therefore Digital Humanities is the same as the Humanities.'
    },
    {
      'definition': 'To my mind, Digital Humanities is a two-pronged discipline: 1. Digital Humanists study the ways in which new technologies and new media impact on traditional humanities disciplines, on human interaction, society, and communication. 2. Digital Humanists develop tools and resources for humanities students and scholars to further studies in the humanities and the social sciences, but also to allow for new research questions as new data and tools to examine this data become available.'
    },
    {
      'definition': 'A fluid term to describe a variety of practices applying and theorizing the intersection of technology and humanities questions.'
    },
    {
      'definition': 'DHers want to find the parameters of meaning that building (and failing) can disclose.'
    },
    {
      'definition': 'The Digital Humanities is an inclusive, open community, whose participants include students, researchers, teachers, and other people interested in participating in discussions of issues related to the learning, teaching, social, political, technical, economic implications of the Web. DH is building, collaborating, learning, sharing.'
    },
    {
      'definition': 'I find this question very hard, as I am just now trying to find out what Digital Humanities is -- this is my first time participating in the event --, and as I have the feeling there is not a unique and complete definition for it. But Digital Humanities has definetly something to do with engaging humanities through use of digital techologies.'
    },
    {
      'definition': 'The Digital now threads through every aspect of the Humanities.'
    },
    {
      'definition': 'As a PhD student working in Archaeological Computing, researching the impact of technology on the Cultural Heritage sector, but based within the Electronics and Computer Science department of my university, I see the Digital Humanities as a useful definition of the place of my research within an academic context. I see the Digital Humanities also as a support network for academics and professionals with a digital component to their work.'
    },
    {
      'definition': 'The application of digital technology to humanities research and teaching.'
    },
    {
      'definition': 'What sits at the intersection of computational method and the traditional pursuits of the humanities.'
    },
    {
      'definition': 'Cross-disciplinary projects coined by a new generation of humanists as model users, who are asking and creating novel applications and solutions from and with more geeky and technical disciplines, with excellent innovative outcomes, connecting contemporary and fashionable technology with scientific research.'
    },
    {
      'definition': 'DH is what critical theory is or was--an opportunity to ask new questions, try new methods, engage in new conversations.'
    },
    {
      'definition': 'The practice of undertaking digitally informed research and teaching in fields covered by the traditional humanities disciplines.'
    },
    {
      'definition': 'The convergence between Humanities (human and social sciences) and Digital Technologies, either as new methodological and epistemological approaches or as the object of investigations of social, cultural and political concerns.'
    },
    {
      'definition': 'With some reluctance, as many have said! Well, its both a field and a suite of methods.'
    },
    {
      'definition': 'A five ring circus consisting of tech in the classroom, digital preservation, scholarly communications, new media and computational methods.'
    },
    {
      'definition': 'The pursuit of knowledge and inquiry in a cluster of subject areas (literatures, languages, linguistics, history, classics, anthropology, archaeology) with the use of some digital method.'
    },
    {
      'definition': 'Application of digital tools to humanities research and pedagogy'
    },
    {
      'definition': 'DH is the application and the use of computing tecnologies for the research, teaching and investigation in the disciplines of the humanities.'
    },
    {
      'definition': 'Practice of digital creation (design, editorial practice, architecture), and/or digital analysis (e.g. text analysis or distant reading) and/or analysis and critique of digital texts (e.g, games or social media or theorizing structures such as databases or semantic markup)'
    },
    {
      'definition': 'Any use of digital technologies that significantly informs research, presentation, or process of humanities based fields and the study thereof.'
    },
    {
      'definition': 'Not sure!'
    },
    {
      'definition': 'The use of information technology in the conduct and presentation of humanities teaching and research.'
    },
    {
      'definition': 'A group of computer-related strategies and tactics that humanists use to accomplish their goals (from research and reading to writing and teaching, etc.).'
    },
    {
      'definition': 'The wide and diverse process in which the study of humanities will remain relevant.'
    },
    {
      'definition': 'The Digital Humanities is humanities in the twenty-first century.'
    },
    {
      'definition': 'I have a vague recollection of a few discussions on this matter.'
    },
    {
      'definition': 'Combination of the inquiring spirit of the humanities, the field of critical pedagogy (Freire et al.), and the practices of new media culture.'
    },
    {
      'definition': 'Digital humanities are a new engaging way to to preserve and communicate the past.'
    },
    {
      'definition': 'The use of digital tools to digitize, manage, analyze and disseminate information and research related to the humanities, or in my specific case, history.'
    },
    {
      'definition': 'For me, a Digital Humanist is one who uses digital tools as a way of investigating the issues that make up the studies in the humanities. Many Digital Humanists, myself included, are especially interested in digital texts, and the unique interactions readers have with these texts.'
    },
    {
      'definition': 'A multifaceted disciplinary field where humanities interests and research questions are addressed through computing and/or find an expression in the digital medium.'
    },
    {
      'definition': 'Using digital technologies, not only ICT, to communicate and research within the humanities'
    },
    {
      'definition': 'What sets Digital Humanities apart, for me, is its genuine interdisciplinarity, its permanent emergence, and its open communication.'
    },
    {
      'definition': 'Innovative ways of seeing the humanities and communicating with others'
    },
    {
      'definition': 'The use of computational techniques in the humanities that would allow research that is otherwise impossible.'
    },
    {
      'definition': 'A range of definitions (or rather, ways of understanding): humanities explored using a range of digital technologies for explanation, expression, reflection and knowledge production/creation.'
    },
    {
      'definition': 'Digital Humanities is a community of people who use and develop digital tools and methods to ask and answer new and old questions about the source base for humanistic inquiry.'
    },
    {
      'definition': 'I dont.'
    },
    {
      'definition': 'Research and teaching relating to digital resources in Humanities.'
    },
    {
      'definition': 'The great opportunity to burn down academic walls'
    },
    {
      'definition': 'Disciplines of humanities developed through digital computing.'
    },
    {
      'definition': 'Any application of digital technology to enable or enhance humanistic inquiry and any humanistic inquiry into aspects of digital technology.'
    },
    {
      'definition': 'It is what I do on Mondays, Wednesdays and Fridays.'
    },
    {
      'definition': 'The digital humanities seek to harmonize the social and technological revolution of the Internet with the traditional preoccupation of the humanities for human and cultural problems as they happen at the scale of the human being'
    },
    {
      'definition': 'I would describe digital humanities as the incorporation of new tools and technologies that allow us to ask various kinds of humanities questions as well as to use humanistic inquiry to reflect on the tools themselves and the changing practices of communication.'
    },
    {
      'definition': 'Digital humanities is whatever we make it to be. (With apologies to D. Boon http://www.hootpage.com/hoot_dboonsticker.html )'
    },
    {
      'definition': 'The conscious use of digital methods and tools to do humanities teaching or research. Also, the study of these methodologies and tools.'
    },
    {
      'definition': 'Digital Humanity is a way of organizing data and visualize it in a more coherent pattern, it presents textural content in many different ways in various digital forms. The purpose of Digital Humanities to me is to find more potential and profound meanings from these new tools.'
    },
    {
      'definition': 'As little as possible.'
    },
    {
      'definition': 'The best way to describe ‘digital humanities’ is the intersection between human cognition and computing. ‘Human cognition’ can seem like a vague term but it encompasses topics such as art, literature, history, music, theatre, religion, philosophy, etc… Digital humanities could be considered an interdisciplinary topic as any of the aforementioned humanities can be synthesized into a digital form.'
    },
    {
      'definition': 'DH represent the point (or an area of research) where traditional humanities disciplines connect and merge with digital technologies.'
    },
    {
      'definition': 'The Digital Humanities is 1) the use of digital technology to facilitate and enhance all stages of humanities scholarship and 2) the humanities-grounded study digital technology.'
    },
    {
      'definition': 'A strange question. The only winning move is not to answer.'
    },
    {
      'definition': 'I try not to'
    },
    {
      'definition': 'Digital Humanities is an academic and social engagement with electronic formats of human cultural processes and forms such as literature, art, history, and music.'
    },
    {
      'definition': 'I dont! I just do it'
    },
    {
      'definition': 'Digital Humanities is a perspective combining the understanding of a Humanities subject and the understanding of the potential of applying a digital approach to its study.'
    },
    {
      'definition': 'Digital Humanitis is a developing subdiscipline within the traditional humanities disciplines as well as a developing discipline based in a focus on the materiality of the methods, documents, and the information of the humanities. Beyond that, I haveno idea.'
    },
    {
      'definition': 'Using digital tools to discover something new to further knowledge of humanity'
    },
    {
      'definition': 'The application of computational methods to research and teaching in the humanities.'
    },
    {
      'definition': 'The use of digital technology to study the field of humanities by combining the computational power of modern computer with the cognitive function of the human brain.'
    },
    {
      'definition': 'Do we really need a definition? Something like jazz? you know its jazz when you hear it (Louis Armstrong).'
    },
    {
      'definition': 'a very rewarding activity which still scares people who dont understand that computers can generate meaning'
    },
    {
      'definition': 'At the digital age the aim of digital humanities is how we use digital technology to create new knowledge. Digital humanities become more interdisciplinary based on digital technology among literature, philosophy, history, aesthetics, ethics and so on.'
    },
    {
      'definition': 'Digital humanities are tools, methods and understanding of how digital technologies enable and change research and research infrastructures and practices in humanities.'
    },
    {
      'definition': 'The study of the Humanities through methods and with perspectives arising from the application of digital procedures.'
    },
    {
      'definition': 'Digital Humanities is a field that aims at developing and using the digital resources and tools for solving the research questions in the Humanities.'
    },
    {
      'definition': 'The use of digital tools, technologies, and techniques to explore, analyze, and understand the humanities.'
    },
    {
      'definition': 'The Digital Humanities is a capacious enterprise that includes, among other things, research using computational and algorithmic methods to study culture and history as well as efforts to use digital media to share humanities content beyond the academy and encourage active engagement with that content by a broad public.'
    },
    {
      'definition': 'That which makes us conscious of our methodology of inquiry. Since digital things are not necessarily electric, maybe we can do digital humanities without computers?'
    },
    {
      'definition': 'Humanists creating, using, researching digital materials to do their work.'
    },
    {
      'definition': 'It be what it is because it do.'
    },
    {
      'definition': 'The intersection of technology and liberal arts, using emerging technology to digitize material for humanists to promote cross disciplinary studies of traditional subjects.'
    },
    {
      'definition': 'Digital Humanities is a mode of inquiry and scholarship. It seeks to engage traditional questions using computational tools. It seeks to disseminate information in digital formats. And it engages questions of how reliance on computational tools shapes the questions asked and interpretations offered in the humanities.'
    },
    {
      'definition': 'Field in which scholars use digital tools to investigate/explore humanities topics.'
    },
    {
      'definition': 'DH is a way of rethinking how work and interact in the digital age.'
    },
    {
      'definition': 'To reconsider the methodology of humanities using digital technology. Thereby, to reconfirm the significance of the humanities.'
    },
    {
      'definition': 'As a rule, I find definitions rather limiting, However, if pressed (as is the case now), I would say that DH is both about the application of digital technologies to research and teaching in the Humanities, and the self-reflexive critical study of those applications.'
    },
    {
      'definition': 'Digital humanities is just one method for conducting humanistic inquiry. Doing research in the humanities often boils down to finding a pattern--in a single text or across several texts--and then providing an interpretation of that pattern. In digital humanities, computation is used to assist in pattern recognition, pulling out patterns that would be difficult for humans to find unassisted. Interpretation of that pattern, however, remains the most important part of the process.'
    },
    {
      'definition': 'Using computers to analyse humanities materials and subjects, or the critical contemplation of using digital technologies for such purposes. Broadly, then, that also means that a good portion of humanities digital publishing activities can fall within its remit in some form'
    },
    {
      'definition': 'An interdisciplinary field with porous borders that is generally concerned with the impact of digital technology on traditional academic practices of teaching, research, and service.'
    },
    {
      'definition': 'Digital Humanities is the study of various humanities through the use of computational techniques. The idea is to gather new information that traditional study methods would not easily pinpoint. This new approach can also speed up the process of information retrieval, acting as a supplement to traditional studies and enhancing our overall understanding of the humanities.'
    },
    {
      'definition': 'The “digital humanities” is an umbrella term that describes how humanities scholars are using digital tools to inform, approach and present their research and teaching.'
    },
    {
      'definition': 'Very broadly--any application of the humanities that involves digital tools and/or approaches.'
    },
    {
      'definition': 'Bringing digital tools, objects and techniques to bear on traditional humanities scholarship.'
    },
    {
      'definition': 'Humanities + Digital = some new methods, ways of making, ways of seeing, and research questions'
    },
    {
      'definition': 'Digital Humanities are conceived as a modern approach to explore and develop innovative information technologies to facilitate new research findings in the humanities. It also implies the invention of new methodologies and a progessive way of digital thinking.'
    },
    {
      'definition': 'Broadly.'
    },
    {
      'definition': 'A community of practice working at the intersection of technology and the humanities, including hackers, yackers, academia and the public.'
    },
    {
      'definition': 'Representing humanities datasets as digital objects that can be manipulated or rendered programmatically or serialized data so it can be transformed by other services or applications.'
    },
    {
      'definition': 'Technology, media and openness incorporated in researching, presenting and teaching the humanities.'
    },
    {
      'definition': 'Digital humanities is the synergy of the humanities and digital technologies, resulting in potentially powerful new ways of researching, analysing, synthesising and presenting humanities scholarship.'
    },
    {
      'definition': 'Digital humanities is an area of education and creation based on the junction of computing and the disciplines of the humanities.'
    },
    {
      'definition': 'Humanities scholarship appropriate to the 21st century, building reusable and interlinkable resources.'
    },
    {
      'definition': 'Digital Humanities allow people a new possibility to access knowledge and in turn generates new knowledge'
    },
    {
      'definition': 'I define digital humanities as the engagement and practice of the humanities with and through digital technologies. This is far from simple, however. Digital technologies change the way we do work. They change the way we compose and revise even when we are writing for print publication. They also afford us new ways to distribute and publish our work and how we can analyze and manipulate information. More radically, however, digital technologies change the way we organize and perceive the world which leads us to ask new questions and adopt new ideologies. For instance, the rise of open access scholarship, Creative Commons licenses, and remix culture are all breaks from the ideologies of print culture.'
    },
    {
      'definition': 'Digital humanities for me is the application of emerging digital technologies to the study of humanities in an attempt to refine and further develop our understanding of humanities subjects.'
    },
    {
      'definition': 'Using or making digital tools, and methods do humanities scholarship.'
    },
    {
      'definition': 'Utilizing computers and new media tools to ask and answer questions in a multiplicity of ways that traditional methodologies are unable to.'
    },
    {
      'definition': 'Using any aspect of the digital to investigate humanities-oriented questions or complete humanities projects.'
    },
    {
      'definition': 'A study field of Humanities using information/communication technology. A study of a method for recording/storing/providing of information resources related to the humanities.'
    },
    {
      'definition': 'Digital Humanities describes the incorporation of digital media into the production, distribution, and archiving of Humanities research. Digital Humanities encompasses both the use and creation of digital tools and the interrogation of these tools--that is, to think about how digital media not only remake scholarship/academia, but society at large.'
    },
    {
      'definition': 'If I were to define the Digital Humanities, I would say the Digital Humanities are the collaboration of work and compiling of research into technology that can be easily accessible and beneficial to communities, institutions, and research. It also includes all humanities-literature, art, and research that is being put online in order for people, no matter the level, to be able to use these tools to their ability.'
    },
    {
      'definition': 'Using dig tech to solve humanist problem - in my case, anything concerning the visual.'
    },
    {
      'definition': 'A field of study that focuses on the digitization and analysis of materials related to humanities. It allows for modern tools to effectively help in the analysis and research of humanities disciplines.'
    },
    {
      'definition': 'Digital Humanities sits on the crossing vertices of genuine interdisciplinarity, continual emergence of new practices, seeking of fresh research questions and open communication.'
    },
    {
      'definition': 'DH brings together ICT-based methods, tools, and digital data with traditional Humanities’ methods and research objects to support the exploration of old Humanities’ quests as well as to discover new access paths to the yet unknown and unthinkable. DH brings up young scholars in the Humanities thinking and acting collaboratively on a global level.'
    },
    {
      'definition': 'Um ... anything in the humanities that has a digital aspect'
    },
    {
      'definition': 'Digital Humanities are Humanities enhanced by information technology on all possible levels.'
    },
    {
      'definition': 'As a designer attached to a department of academics I wouldnt even start.'
    },
    {
      'definition': 'Creative, critical, and technical work engaging with present-day and emerging technologies, and inspired by or extending traditional liberal-arts studies.'
    },
    {
      'definition': 'Combination of the humanities with IT and all the latest technologies in a museum, archival and research context.'
    },
    {
      'definition': 'Using digital tools to create a deeper understanding of the humanities.'
    },
    {
      'definition': 'Researching, teaching, creating and interacting at the nexus of the digital and the humanities.'
    },
    {
      'definition': 'Translocal, transmedia, transgender global convergence between innovation, sustainability and human rights.'
    },
    {
      'definition': 'I dont, I use and develop computational tools for humanities research.'
    },
    {
      'definition': 'The stuff humanities people do when they get a computer.'
    },
    {
      'definition': 'Activities in humanities-related disciplines which involve a significant amount of research computing ( in e.g. resource creation, annotation, analysis, data visualization, etc.)'
    },
    {
      'definition': 'I define the Digital Humanities very narrowly, so that _I_ belong, but _you_ dont.'
    },
    {
      'definition': 'I dont.'
    },
    {
      'definition': 'The use of digital media and tools to answer traditional humanities questions, and the study of new questions that are formed by the intersection of modern methods/tools/models and humanitistic sources.'
    },
    {
      'definition': 'The creation and critical application of digital technologies to develop scholarly communities and further humanistic knowledge.'
    },
    {
      'definition': 'Transformation of humanities research, teaching, and representation through the use of digital tools and methods. Also, transdisciplinary modes of inquiry facilitated by the digitally-assisted breakdown of disciplinary boundaries often dependent upon physical and formal constraints as manifested in analog experience.'
    },
    {
      'definition': 'Digital humanities is a field that uses contemporary technology - and imagines and creates new technologies - to learn and teach about culture.'
    },
    {
      'definition': 'Technology and computing are used to reexamine traditional humanities research and explore new modes of scholarship.'
    },
    {
      'definition': 'Digital Humanities is a broad, creative, interdisciplinary field that brings together quantitative analysis and the humanities. This incorporates not just text analysis, but visual imaging and design (what Im interested in), community collaboration, and scholarship across the continents.'
    },
    {
      'definition': 'DH scholarship is not merely the content of traditional humanistic scholarship translated into new media nor the methods of traditional humanistic scholarship transferred to new content. It is the synthesis of traditional humanistic inquiry and computing technologies by which such inquiry is expanded and deepened in ways it could not have been without that technology. (http://blogs.tamu.edu/kdavis/2012/01/30/plato-was-not-a-digital-humanist-and-neither-am-i/)'
    },
    {
      'definition': 'Making technology humane.'
    },
    {
      'definition': 'the essentially collaborative application of engineering-type solutions to human-type problems'
    },
    {
      'definition': 'I define digital humanities as being an open field that encompasses both studying texts that are created and read in digital spaces; and the use of digital tools to study non-digital texts, i.e., 18th century lit.'
    },
    {
      'definition': 'The intersection of new computational approaches to traditional humanistic scholarship.'
    },
    {
      'definition': 'I study digital culture, practice information architecture, and teach both. My definition comes at this intersection between academic research and industry practice.'
    },
    {
      'definition': 'I conceive digital humanities in two levels, one as a powerful tool to performed complex analysis, in my particular case, of literary and cultural phenomena. There are a lot tools that can help to unveil relations hidden in huge corpus of information. In the other hand, having the ability to develop those tools and even create digital objects as such is the other level. Digital humanities are a new paradigm that allows us to embedded different views and possibilities.'
    },
    {
      'definition': 'The use of (innovative) digital technologies in the humanities to allow for research and education otherwise not possible'
    },
    {
      'definition': 'The emergence of traditional humanities into the future of technology.'
    },
    {
      'definition': 'The study of digital culture; a collaborative praxis; the intersection of computing with the questions of the humanities; challenging; exciting; fluid.'
    },
    {
      'definition': 'its beyond interdisciplinary--its a new ecosystem that includes scholars, librarians, archivists, computer scientists, graphic designers, administrators, students, teachers, granting agencies (public and private), and anyone else interested in promoting humanistic ways of experiencing digital media (or digital ways of experiencing the humanities).'
    },
    {
      'definition': 'DH allows theoretical and practical disciplines come together and create something new...'
    },
    {
      'definition': 'Is just plain Humanities using Digital tools.'
    },
    {
      'definition': 'Using digital resources, methods and tools to do good transformative humanities research'
    },
    {
      'definition': 'To me digital humanities is not adding computing to traditional humanities subjects; it is rethinking our subjects and core activities (teaching, scholarship) as the new communications media take us to new questions, new modes of creativity, and new connections among people and ideas.'
    },
    {
      'definition': 'Digital Humanities can be defined as the contemporary phase of the humanities that tackles to fathom, apply--and make sense of--the emerging digital globalization of society.'
    },
    {
      'definition': 'A skin of modernization on the traditional humanities.'
    },
    {
      'definition': 'A community of practice for humanists who are (1) inventing a new medium of scholarly and educational discourse by exploiting the powerful affordances of the digital medium and (2) critically reflecting upon the process of media innovation.'
    },
    {
      'definition': 'Computer aided social science.'
    },
    {
      'definition': 'With great difficulty. Under duress, the intersection between the humanities and computation with exciting results.'
    },
    {
      'definition': 'I define Digital Humanities as the re-figuring of computing, a historically positivist field, in order to pose and answer the more speculative questions typical of the humanities. Of late I have been considering the difference between Digital Humanities (which seems to centre on humanities inquiry) and humanities computing (which focuses on the intersection of humanities with computer as a material object).'
    },
    {
      'definition': 'The Digital Humanities are a community of scholars who support, facilitate, and engage in using technology to augment the practice of traditional humanities research.'
    },
    {
      'definition': 'DH are part of the Humanities. Humanists ask research questions. From time to time it makes sense to answer them by using digital means and methods. its not a decision between digital or analog. Digital Humanities has to match with scope and focus of the research project'
    },
    {
      'definition': 'Anything a Humanities scholar does that is mediated digitally, especially when such mediation opens discussion beyond a small circle of academic specialists.'
    },
    {
      'definition': 'Developing tools and workflows to create comprehensive, interoperable, and innovative digital resources.'
    },
    {
      'definition': 'Humanities gone digital and vice versa'
    },
    {
      'definition': 'Une pratique réflexive des outils numériques en sciences humaines et sociales.'
    },
    {
      'definition': 'I wouldnt dare! Im interested in how the definition is evolving. Im more interested in the variety of methods employed in the digital humanities. And Im most interested in the results and interpretation of research and scholarship in the digital humanities.'
    },
    {
      'definition': 'Dare I try such a thing when the debate seems to continue on?! Im still on the quest to find my personal definition of DH. When I find one, Ill let you know.'
    },
    {
      'definition': 'Digital Humanities is in its simplest form conducting humanities research with the help of a computer whether it is visualizations or text analysis.  Digital Humanities can also include combining our expertise of computing and programming with the humanities to complete web based projects or other projects that require some programming knowledge.'
    },
    {
      'definition': 'Humanities research based on Digital Data and the Internet.'
    },
    {
      'definition': 'DH stands for a wide variety of disparate practices, methodologies, and ways of communicating that take advantage of technology in order to enable and encourage the act of thinking deeply and critically about life.  From this perspective, DH is the name given to the work of the most open-minded and courageous humanists working today.'
    },
    {
      'definition': 'I think of digital humanities as an umbrella term that covers a wide variety of digital work in the humanities: development of multimedia pedagogies and scholarship, designing & building tools, human computer interaction, designing & building archives, etc. DH is interdisciplinary; by necessity it breaks down boundaries between disciplines at the local (e.g., English and history) and global (e.g., humanities and computer sciences) levels.'
    },
    {
      'definition': 'Digital humanities is a constantly evolving discipline based on scholarship and pedagogy derived from the intersection of computing and technology with traditional humanities education and field of study.'
    },
    {
      'definition': 'A name that marks a moment of transition; the current name for humanities inquiry driven by or dependent on computers or digitally born objects of study; a temporary epithet for what will eventually be called merely Humanities.'
    },
    {
      'definition': 'One of those moments where the rest of the world and Humanities collide.  Digital Humanities is an opportunity for the Humanities to explore the immense possibilities that the technologies of today can support (and I tentatively suggest, improve) the way in which identification, collection, interpretation, and dissemination of data happens in our field.'
    },
    {
      'definition': 'Digital Humanities for me is the way that we can collaborate and share online, all over the world, bringing to life again the old stories while creating new stories of our own, in words and in images.'
    },
    {
      'definition': 'Using computational tools to do the work of the humanities.'
    },
    {
      'definition': 'Opening up new knowledge and new ways of learning through the application of digital technologies to any humanities subject.'
    },
    {
      'definition': 'Digital Humanities is an academic field self-reflexively looking at the application of digital technology to humanities fields of enquiry.'
    },
    {
      'definition': 'Charting and exploring the interface of computing and the Humanities to ask and answer all kinds of questions about what it means to be Human and how computing can help us to interpret that'
    },
    {
      'definition': 'I would say there are five branches in the Digital Humanities: 1) Computing in the Humanities 2) History of Computing and Information systems 3) Digital Publishing and Scholarly Communication 4) Digital Archiving 5) Epistemological Thinking about Humanities and the digital Turn.'
    },
    {
      'definition': 'For me, DH is about creating digital toolsets that allow users to undertake new forms of research in the humanities. Just as importantly, its about making sure we build a deeper understanding of whats changing in the wider world as digital content and interactions become central to our personal and professional endeavours.'
    },
    {
      'definition': 'I do my small part to define it through my work as a humanist--by bringing traditional questions about values, norms, and the role of education to bear on the changing landscape of human expression, communication, and production.'
    },
    {
      'definition': 'using computers to study text; studying digital text; studying on-line materias with a concern for the human condition'
    },
    {
      'definition': 'The study of the role of technology in helping to structure the work of writers and writing contexts.'
    },
    {
      'definition': 'I define Digital Humanities as the re-figuring of computing, a historically positivist field, in order to pose and answer the more speculative questions typical of the humanities.'
    },
    {
      'definition': 'I do my small part to define it through my work as a humanist--by bringing traditional questions about values, norms, and the role of education to bear on the changing landscape of human expression, communication, and production.'
    },
    {
      'definition': 'I dont. But for the time being I do focus on issues of large-scale connectivity between diverse forms of digital scholarship and evidence as mediated through the public availability of both.'
    },
    {
      'definition': 'I view the digital humanities as a collaborative, open, and emerging field of inquiry. A state of mind, a methodology, and theoretical approach to knowledge, I embrace how it forces us to reconceive our practice. In my own work, I embrace curation, as a means of reweaving and reintegrating theory and practice in history. I seek to interpret space, place, and identity in a multi-sensory way. I fail more often than not. But the digital humanities is like jazz in that it is about process, as well as out outcome.'
    },
    {
      'definition': 'My definition of Digital Humanities is the creative analysis, synthesis and presentation of information (both print and non-print) in digital environment. Digital humanities investigate how digital media affect the disciplines in which they are used. In practice, we are constantly redefining not only the concept of humanities computing but also of computing itself. In this manner, we come to understand how these disciplines when recalibrated for a digital environment contribute to our knowledge of computing; we also come to understand how computing changes the way we acquire knowledge and experience affect.'
    },
    {
      'definition': 'Digital Humanities is the application of humanities methodologies and theories to modern technology research.'
    },
    {
      'definition': 'The use of digital technologies to support humanists in their scholarship activities. Moreover humanists are expected to contribute to the perfection of existing digital tools by providing ideas and functional requirements that those tools need to possess.'
    },
    {
      'definition': 'The use of technology for supporting long term digital preservation of the human record, and enabling innovative methods for accessing it. The creation of digital infrastructure to support the work of researchers and scholars in the humanities. It also involves the development of computing approaches to humanities disciplines, mutually enriching humanities and computer scientists. In my opinion, Nicholas Negroponte, (MIT Media Lab co-founder), eloquently captures the scope of DH by stating: Computing is not about computers anymore. It is about living.'
    },
    {
      'definition': 'Interconnectivity: text, image, space-time.'
    },
    {
      'definition': 'Production of knowledge in forms not limited to traditional (e.g. pre-electronic) media.'
    },
    {
      'definition': 'An area of study that focuses on the digital in our daily lives--how we study, think, and interact.'
    },
    {
      'definition': 'Process of modeling, inserting raw information available through books, journals and other resources into a database and visualizing it to the user.'
    },
    {
      'definition': 'Digital Humanities is the informed and intentional use of digital objects and practices to create and study in the humanities, broadly defined. In that sense, it is a specialization that cuts across disciplinary boundaries to the work of digital humanists in other disciplines. It is also the insistence that the humanities comes to understand the implications of its assumption that only print technologies exist, and it is the insistence that the humanities learns that no technology is invisible, natural, or inevitable, and that someday all humanists will be digital. A few will specialize in print, chirographic or oral-culture humanities.'
    },
    {
      'definition': 'I think digital humanities, like social media, is an idea that will increasingly become invisible as new methods and platforms move from being widely used to being ubiquitous. For now, digital humanities defines the overlap between humanities research and digital tools. But the humanities are the study of cultural life, and our cultural life will soon be inextricably bound up with digital media.'
    },
    {
      'definition': 'Digital Humanities involves the effort to consider how our human capabilities and capacities are developing, or being challenged, by and through digital media.  Those scholars and practitioners who locate themselves within digital humanities view themselves as interdisciplinary collaborators who want to work together to enhance opportunities for individuals and groups traditionally marginalized from the centers of power. We therefore see our task as a critical and productive one, pressing back against the tides of efficiency and busyness that are leading people to view themselves merely as earners and consumers rather than as human creators and participants.'
    },
    {
      'definition': 'I dont know that defining digital humanities has any useful purpose, though the act of defining marks digital humanities with the attribute of scholarly inquiry. A humanist with an interest in digital things is, I hope, still a humanist, one who defines the self by interest in varieties of human expression. If ones interest is digital things, then one must achieve some form of digital literacy to do useful scholarly things. If ones interest is humanities, one must think about how digital technology reshapes ones interaction with traditional---and new---objects of humanist studies.'
    },
    {
      'definition': 'I would define it as the  intersection between computing technologies and research and teaching in the humanities. Influnced by web technologies, it also promotes collaborative approaches to scholarship.'
    },
    {
      'definition': 'using digital means to find out about/publish about stuff that people do.'
    },
    {
      'definition': 'Creating and applying digital function to humanities research and pedagogy'
    },
    {
      'definition': 'Digital Humanities for me is a broad area that contains (1) ICT as a tool for research, teaching and studying and (2) ICT as a subject for humanities research.'
    },
    {
      'definition': 'I let two very different sources define DH for me: A field of study, research, teaching, and invention concerned with the intersection of computing and the disciplines of the humanities. (Wikipedia) and The digital humanities are just the humanities of the present moment. (Alex Reid: http://www.alex-reid.net/). I find those two definitions - one very inclusive and dry, and the other thought-provoking but equally inclusive - to be productive and useful. To work in DH is to be curious about the intersection of digital media and humanities research.'
    },
    {
      'definition': 'Digital humanities is the application of digital tools and processes to the study of humanities disciplines resulting in new efficiencies and new discoveries that are not obtainable in the analog world.'
    },
    {
      'definition': 'A term of tactical convenience.'
    },
    {
      'definition': 'I try not to.'
    },
    {
      'definition': 'The advent of digital technologies is changing and challenging the ways historians practice their craft. The way we collect, present, and store information has changed rapidly in the last twenty years. Digital history is several things: a methodology meant to aid the traditional art and practice of historians, the use of digital tools to gain insight into information that cannot be done with a legal pad and pen, allows historians to disseminate and present their information in new ways, and a means to reach wide audiences through digital technologies. The goal isn’t cliometrics 2.0 or to augment the theory-driven social sciences, but to abide by the historians commitment to complexity and nuance while utilizing digital technologies to aid that task.'
    },
    {
      'definition': 'Humanities is humanities, digital or not -- the study of literature, fine arts, history, language, and philosophy.  We dont distinguish digital sociology or digital astronomy, so why digital humanities?  Just because computers are involved doesnt mean the basic nature of the subject area is any different than it has been been traditionally.   Computers allow for doing things with texts and other cultural artifacts that could not be done feasibly without the computational power and storage modern computers provide.   Computers should be considered an extension of the scholars mind -- very useful tools indeed.'
    },
    {
      'definition': 'It is both a methodology and a community.'
    },
    {
      'definition': 'I define Digital Humanities as the next evolution of the College of Humanities and Social Science.  The root word of Humanities is human, and encapsulates all of man in an organic or digital realm serves a purpose for historians and other researchers.'
    },
    {
      'definition': 'A nome de guerre.'
    },
    {
      'definition': 'It is the use of digital technologies to assist people working in the Humanities in ways unimaginable to re-discover the meaning of life (!) in this digital age.'
    },
    {
      'definition': 'When Im asked, I like to say that digital humanities is just one method for doing humanistic inquiry.'
    },
    {
      'definition': 'The digital humanities is whatever we make it to be.'
    },
    {
      'definition': 'The Digital Humanities is both a field with a discernable set of academic lineages, practices, and methodologies, and a vague umbrella term used to describe the application of digital technology to traditional humanistic inquiry. Ultimately, what sets DH apart from many other humanities fields is its methodological commitment to building things as a way of knowing.'
    },
    {
      'definition': 'The digital humanities, quite simply, is doing humanities work with digital media. Though much has been made about digital media, like video games, threatening the kind of book learning that humanists do, many of the same critical problems and questions we have been working on for centuries still apply and can be used to read these new media forms. Furthermore, these digital tools can be leveraged to help us do this kind of intellectual labor. So digital humanities includes both doing humanities on digital objects and using digital objects to do humanities.'
    },
    {
      'definition': 'DH is all about freedom.  Humanity is the producing animal (Marx) or the symbol-using animal (Kenneth Burke).   The humanities have always studied what people create in the realm of freedom.  The whole point of putting things in the digital realm is the freedom it gives us, to turn the physical into symbols that we can manipulate as freely as in a video game.   You might not find anyone in the academy more concerned with freedom than digital humanists.'
    },
    {
      'definition': 'The use of information technology and software with humanities source materials to pursue research questions.'
    },
    {
      'definition': 'Digital humanities work is the activity of joining computation and humanistic thinking to create knowledge--interpretations, motivated collections, reasoned arguments, etc.'
    },
    {
      'definition': 'Digital humanities is the intersection of work in the humanities (research, teaching, writing) with technology (tools, networks, interactions), when the practitioner is consciously exploring a humanistic subject and a technological method, at the same time.'
    },
    {
      'definition': 'Digital Humanities is the integration of sophisticated, empirical techniques utilizing tools and technologies typically associated with practical sciences into the study of traditional humanities questions.  It represents a more exploratory and less quantitative approach than social sciences in the use of such tools but it also represents ambitious attempts to model nuanced human wisdom in ways that, like early flying machines, are beautiful, quite impractical and often fail.'
    },
    {
      'definition': 'The application of computing technology to the humanities, *and* the critical investigation of the human use of this technology.'
    },
    {
      'definition': 'The digital humanities is a name claimed by a community of those interested in digital methodologies and/or content in the humanities.'
    },
    {
      'definition': 'Digital Humanities means taking full advantage of current and emerging technologies to support conceptualizations of learning history that stress developing inquiry skills, perspective taking and meaning making over the transmission textbook-driven model.'
    },
    {
      'definition': 'Digital humanities, studies and resources, have the capacity to create social networks. Teachers and curators are able to take collections with them to students in remote locations.'
    },
    {
      'definition': 'DH combines established research methodologies in the Humanities with computational methods and new ways to disseminate digitally both data sets and research findings.  DH is more a community of practice than a specific set of methods and procedures.  Thus, DH encourages ongoing collaboration and its practitioners are committed to making Humanities research extensible (or at least they ought to be).  DH is by nature interdisciplinary and so provides a practical means to integrate research data and methodologies from more than just one humanities discipline.'
    },
    {
      'definition': 'Digital Humanities is the deliberate, critical application of emerging technology to the study of traditional subjects such as literature, art, philosophy, and language, often (but not always) with a focus on how those traditional fields are now using emerging technology. We are deliberate and critical when we foreground the study of our own digital tools (for example, the forward-thinking digital humanist prefers the open-source tool to the proprietary one). We apply technology because we must participate in digital culture in order to understand it. Full participation in digital culture means contributing to (creating) the cultural economy, not simply observing (consuming).'
    },
    {
      'definition': 'Digital Humanities is the intersection of humanities studies with the digital world. This intersection just keeps getting bigger, as more people do more things digitally, and invent more ways that we can answer questions using computers.'
    },
    {
      'definition': 'My lawyer advises me not to answer this question. But I have written a few thoughts on my blog. http://www.stanford.edu/~mjockers/cgi-bin/drupal/node/43'
    },
    {
      'definition': 'DH is a multi-discipline through which criticism, analysis, and speculation is focused on the past, present, and future of the human condition.'
    },
    {
      'definition': 'Digital Humanities is a term that refers to materiality.  I am a writer and a digital artist which means that ultimately my material is language.  The digital half of digital humanities simply indicates how that language is executed.  Digital Humanities is not an obscure field.  It describes the art of the present by looking at new and familiar modes of representation.'
    },
    {
      'definition': 'Dan Cohen offers a fair definition (http://bit.ly/gVUpV7) with which I wholeheartedly agree. Of course, institutionally, it often makes more sense to describe it as a discipline (when offering a course in DH for example, or in organizing a conference) but I feel that these are rather more like contingent, not essential (if there can be such a thing) characterizations.'
    },
    {
      'definition': 'Fairly broadly: the use of technology in communicating, discussing, thinking about the humanities.'
    },
    {
      'definition': 'The Digital Humanities is not just technology people and not just traditional humanistic scholars. It should include anyone interested in digital pedagogy and scholarship with a humanistic ethic. They might work under the hood, behind the technological screen or out front on the stage making it possible to collect and analyze the changing relationships of all agents involved in determining the human condition in the 21st century.'
    },
    {
      'definition': 'Digital Humanities is the acknowledgement that human creativity is, for the moment, deeply entangled with our technological tools and networks. The media extensions cannot be separated from our reality.'
    },
    {
      'definition': 'The democratization of knowledge through the application of digital technologies to the advancement of discourse in the humanities, broadly defined (and not restricted to the academy!).'
    },
    {
      'definition': 'The use of digital tools and methods in humanities study and dissemination.'
    },
    {
      'definition': 'The use of digital technologies to formulate innovative reseach questions in the humanities and to investigate in new ways the primary materials (text, image, sound. object) with which humanities scholars are concerned. A field of engagement in which technology, textuality and humanities converge.'
    },
    {
      'definition': 'The digital humanities is a blanket term for many different types of activities. For researchers, I believe it is a philosophy that there are answers to questions that cannot be answered without the aid of machines. For exhibitors, it is a belief that computers can be used to enhance the visitor experience. For all, it is an understanding that while our own minds may have limits, that need not limit what we can do or know.'
    },
    {
      'definition': 'the application of information, computing, and communication technologies to humanities questions, problems, or data'
    },
    {
      'definition': 'Digital Humanities is the application of digital tools to the work of humanists and the creation of humanist works in the digital realm.  Its applications encompass research and teaching.'
    },
    {
      'definition': 'For me, its a number of different things. It might be humanistic research that incorporates digital tools, the act of building a digital archive or scholarly edition, finding new ways of displaying research or involving an audience in the research process, or building new tools for humanistic inquiry.'
    },
    {
      'definition': 'DH is the umbrella that shelters critical hackers and theorists of the hack from the vitriol of analog hacks.'
    },
    {
      'definition': 'The application of computing and web-based tools in Humanities research.'
    },
    {
      'definition': 'Digital Humanities is, increasingly, just Humanities - as far as Im concerned. New tools lead to new methodologies, new perspectives, and new questions that all humanists should be aware of and concerned with.'
    },
    {
      'definition': 'I understand DH as the iterative design and application of digital research and teaching tools to meet the real-world needs of living, breathing humans. This could include students (Ill be working on a pilot digital writing assessment study that day) or cultural stakeholders (Ill also be working on a long-term project involving the design of a digital archive for cultural stakeholders).'
    },
    {
      'definition': 'DH is inquiry enabled by digital methodologies or modes of research, dissemination, design, preservation, and communication that rely on algorithms, software, and or the internet network for processing data.'
    },
    {
      'definition': 'Digital Humanities is what humanities will be in the future.  It is public, dialogical, collaborative and made of collectives.  It allows for remixing and re-imagining how we think and analyze traditional forms of knowledge creation, knowledge sharing and knowledge storage.'
    },
    {
      'definition': 'Using digital technologies and tools to ask questions, do research, hypothesize, and analyse, and present human cultural heritage.'
    },
    {
      'definition': 'The study and practice of using technology for humanities-based research, teaching and collaboration.'
    },
    {
      'definition': 'At its core, the Digital Humanities is the use of digital tools to gather, organize, analyze, and present scholarly research in the humanities. Humanists seek to understand the world and cultures in which people live and have lived through a variety of disciplines including literature, English and other modern languages, philosophy, art, art history, and history. While many of the questions humanists seek to answer have not changed, new technology, like text mining, dynamic visualizations, and spatial analysis, provide humanists ways to ask new questions and view old questions differently.'
    },
    {
      'definition': 'Which is to say, I dont know what it is, but I know it when I see it...'
    },
    {
      'definition': 'All disciplines that are used to study human knowledge and culture are known as Humanities. Digital Humanities are all those same subjects conducted by using digital tools to expand human knowledge and culture. To understand how we expand our knowledge and culture though digital tools. As an example, Sociology that is classified within Humanities, if it studies social behavior, relationships and communications between different users on a network, we could talk about Digital Sociology.'
    },
    {
      'definition': 'For me Digital Humanities explores how and whether we can apply technology to our experience of history, heritage and culture. DH questions how technology changes the environment around us, physical and digital, and discusses whether those changes are for the better. I believe the concept of digital humanities is much more then just humanities computing; as society becomes increasingly digital, it become a way of life and it is important to understand how and why that is happening.'
    },
    {
      'definition': 'The scholarly study and use of computers and computer culture to illuminate the human record. (BUSA remix)'
    },
    {
      'definition': 'As mentioned above, to me the key aspects of Digital Humanities are the digitisation of materials, and their dissemination to the general public. Work in this field needs to be outward focussed, as much as it is focussed on the furthering of research. The nature of the digital age is that information can be readily shared, that research can take on a far more collaborative nature, and this approach is of importance to all areas of academic study, including the humanities. Presentation, functionality, and ease of use are, in my opinion, as important as the content of digital archives in all disciplines.'
    },
    {
      'definition': 'Innovative uses of digital tools to do the work of the humanities.'
    },
    {
      'definition': 'For me, but this is very specific, Digital Humanities is to interconnect humanities researchers, software developers and infrastructure providers in order to contribute to the research and the research possibilties in this discipline.'
    },
    {
      'definition': 'Digital Humanities is a term used to define the technical evolutionary aspect of modern humanities scholarship. Digital Humanities seeks to take advantage of new modes of technologically enabled scholarship to ensure the contemporaneous relevance and future preservation of classical, traditional and historical modes and approaches of scholarship native to the humanities.'
    },
    {
      'definition': 'Humanities by digital means.'
    },
    {
      'definition': 'With extreme reluctance.'
    },
    {
      'definition': 'Digital libraries are a great example of an outcome of Digital Humanities. The interaction and combination of the new digital era with history, librarianship, literature, etc. gives a wider frame for researchers of all different branches to work in. Now the full texts of important writers are just a click away!'
    },
    {
      'definition': 'I think that increasingly there is a little of the digital in almost all research in the humanities. This makes Digital Humanities much harder to define but it makes it more relevant than ever. Digital Humanities is technical and it is also highly theoretical. For this reason, as digital technologies help to enhance research in the humanities, the humanities are also helping us to better understand the implications of the digital.'
    },
    {
      'definition': 'Digital Humanities is, as far as I am concerned, an opportunity for the Humanities to participate in and help help develop understandings of the spead of digital technologies.'
    },
    {
      'definition': 'The digital humanities study how digital media (formats and tools) and the cultural forms associated with them affect the work of the humanities -- and vice versa.'
    },
    {
      'definition': 'Digital Humanities is the application of computer technology to make intellectual inquiries in the humanities that either could not be made using traditional methods or are made significantly faster and easier with computer technology. It can include both using digital tools to make these inquiries or developing these tools for others to use.'
    },
    {
      'definition': 'DH is anything that combines imagining, planning, building, and creating, using a digital medium, with language, literature, history, philosophy, art, music, etc. Anyone comfortable with a computer and interested in the humanities probably participates in Digital Humanities, whether formally (with support from a fellowship or institution, with a planned and mediated project) or informally (through compiling notes and information in multimedia form). We have as much to learn from the informal processes as the formal.'
    },
    {
      'definition': 'I work in digital literary studies and archives primarily, so I think about digital humanities in terms of the interactions between texts of various sorts and a wide array of digital environments. While my work is focused in this way, I generally conceive of DH as a field interested in the intersections between humanities-based research and teaching and computing technologies and literacies. This would include the humanities which take artistic production as their subject, but also the fine arts and performative practices.'
    },
    {
      'definition': 'Digital Humanities is a critical investigation and practice of the methods of humanities research in the digital medium.'
    },
    {
      'definition': 'Digital humanities is a meta-field, a set of co-evolving new knowledge and best practices expanding from traditional humanities disciplines into born-digital research and teaching methods. Digital humanists study all objects and practices of concern to analog humanities, plus those made possible by the digital age. Digital humanists also build tools that make it possible for themselves, their students and the world at large to engage critically with our cultural heritage.'
    },
    {
      'definition': 'I dont define Digital Humanities any more. All humanities seems to be digital in one way or another.'
    },
    {
      'definition': 'I like to define Digital Humanities as a set of new activities for humanists instead of a field of study, because Digital Humanities involve something more than a methodology or an interest on a topic. Implies a complete different attitude towards humanities, the understanding, use and creation of new tools, and a alternative way to communicate the findings. This is something that involves you completely.'
    },
    {
      'definition': 'Digital Humanities is a way to ask, redefine, and answer questions with a more intelligent set of tools.'
    },
    {
      'definition': 'Digital humanities integrates the acquisition of knowledge through research methods, as well as the expression of intellectual material through emergent technologies and media.  This is achieved through technologies (i.e. mobile devices, wireless access, and digitalization), and online platforms (i.e. social media, Web 2.0 applications, and other emergent media).  Together these invite a new epistemological way to know and investigate our world.'
    },
    {
      'definition': 'The utilization of technologies to help increase the level/types of research, The dissemination of said systems to communities involved in the use of humanities resources, and the study of systems design theories as applied within the realm of humanities.'
    },
    {
      'definition': 'Digital Humanities are the application and the use of computing tecnologies for the research, teaching and investigation in the disciplines of the humanities.'
    },
    {
      'definition': 'Digital Humanities is to me the use and abuse of technology to potential improve study within the field of humanities. It stretches from a simple blog to complex corpus tools to whatever the next person can think of.'
    },
    {
      'definition': 'Digital humanities uses computers, software and the web to enable and publish the ever new work of humanities scholars.'
    },
    {
      'definition': 'Digital Humanities is the interaction, interrelation, and intersection of technology, culture, language, and literature.'
    },
    {
      'definition': 'I think its a convenient label, but fundamentally, I dont believe in it. There are people who havent yet attempted to come to grips with how digital tools and methods can change research, teaching, and outreach in the Humanities, and these are those who have. The latter are Digital Humanities types.  But its all Wissenschaft.'
    },
    {
      'definition': 'Development and application of specialist digital resources for research in the humanities'
    },
    {
      'definition': 'DH fosters the evolution of scholarship, engenders collaboration and dialogue, and widens access and participation across the arts and humanities (and the MLA sector) via the application of digital methods and techniques.'
    },
    {
      'definition': 'Digital Humanities is an interdisciplinary area that may include the application of methodologies and research agendas from computer science and other informatics-heavy and quantitative sciences to the subject area of traditional humanities disciplines, such as literature, history and languages.'
    },
    {
      'definition': 'My definition is an expansive/ecumenical one. I see Digital Humanities as an umbrella concept bringing together all of the different ways in which the computer, and especially the internet, have transformed humanities work. It includes using computer methods to mark and analyze analog humanities products, adapting the distinctive features of the World Wide Web for the production and presentation of humanities research, and bringing humanities methods to the evaluation of the entirely new genres of expression made possible by computers.'
    },
    {
      'definition': 'I am currently using a short definition, which is that Digital Humanities is a combination of using computer technologies to study human cultures and studying the effect of computer technologies on human cultures.'
    },
    {
      'definition': 'Digital Humanities involves the mining of sources, using new media tools, so we can interrogate the past with new questions.'
    },
    {
      'definition': 'A creative ongoing fest where everybody is invited, but in which only a small bunch of techno people participates!'
    },
    {
      'definition': 'I hate this question, and I dont have an answer for it. Neither, it seems, does a large portion of the people who might be called Digital Humanists. Ill leave it at that.'
    },
    {
      'definition': 'For this project we are going for the broadest definition of Digital Humanities- the interdisciplinary field that seeks to understand the impact and relationship of computing and the Humanities. By DH projects we are seeking to document websites, databases, tools, digitilization projects, CDs and so forth that have been created to aid and support humanities research. We are aware that some DH projects can ovelap with digital libraries or teaching aids and digital learning objects.'
    },
    {
      'definition': 'DH mixes computing technologies and new media literacy with traditional fields in humanities, making use of accumulated information. It is a multidisciplinary field, and so very hard to contain within traditional boundaries. Both DH and design are complex playgrounds, maybe thats why designers love to be part of DH projects.'
    },
    {
      'definition': 'The theorizing, developing and application of/on computational techniques to humanities subjects.'
    },
    {
      'definition': 'Broadly construed, digital humanities is the use of digital media and technology to advance the full range of thought and practice in the humanities, from the creation of scholarly resources, to research on those resources, to the communication of results to colleagues and students.'
    },
    {
      'definition': 'I define digital humanities, loosely, as the use of computers and the Internet to advance research, teaching, and scholarly communication in the humanities, as well the study of computings significance for the humanities. Many activities would fall under this definition, including building tools and collections, using tools and collections to discern patterns in humanities data, communicating the results of humanities research through multimodal and/or interactive publications, linking together classes using social networking technologies, and analyzing the significance of networked culture. I also define digital humanities by its community and its ethos, which I view as being committed to openness, experimentation, collegiality, transdisciplinarity, public knowledge, and innovation.'
    },
    {
      'definition': 'The Digital Humanities are  – or should be – a movement in the Humanities that aims to design, develop, promote, and use digital tools to support work – academic or not – in the various disciplines of the Humanities. It strongly encourages, benefits from, and contributes to interdisciplinary practices, including beyond the Humanities. I hope that these practices will soon be so natural to the Humanities that they won’t need to be qualified Digital anymore.'
    },
    {
      'definition': 'I define Digital Humanities as a praxis and also as a field, and in this way it reminds me of Romanticism, also a praxis and a field in my opinion. As a practice, DH involves making and/or thinking about digital objects or entities that participate in or contribute to Humanities disciplines. As a field, it perhaps includes the growing body of electronic literary texts (either e-born or book-born) and archival projects as well as theory and criticism related to digital technologies. Im sure Im leaving something out, but this is a start.'
    },
    {
      'definition': 'The digital humanities is what digital humanists do.  What digital humanists do depends largely on academic discipline but also on level of technical expertise.  Each discipline, with varying degrees of intensity, has over the years developed a set of favored methods, tools, and interests that, although shared with other disciplines, remains connected to the discipline.  The task of the digital humanities, as a trans-curricular practice, is to bring these practitioners into communication with each other, and to cultivate a discourse that captures the shared praxis of bringing technologies of representation, computation, and communication to bear on the work of interpretation that defines the humanities.'
    },
    {
      'definition': 'Humanity (and not just the humanities) mediated through the largest extant body politic. A global vehicle (and personal prosthetic) for containing what it is to be human and humanist--within and without the academy.'
    },
    {
      'definition': 'The intersection of humanities and computer technologies'
    },
    {
      'definition': 'Digital Humanities: A riddle the humanist has to tackle now if he wants to be a contemporary of his own time. — See also: Computer; Conundrum; Humanités numériques.'
    },
    {
      'definition': 'The practice of the humanities using digital media.'
    },
    {
      'definition': 'The development of new digital methodologies that, combined with traditional humanities methodologies, expands the kinds of research that humanists can do in their own field and in interdisciplinary projects.'
    },
    {
      'definition': 'For me, the digital humanities encompasses teaching and scholarship based around a commitment to building. Building doesnt necessarily mean coding. For me, building means understanding and critically analyzing how artifacts (writing, music, film, even houses, arguments, and groups of people) are put together, with the intention of being able to produce something out of the mass of objects and relations that make up our world.'
    },
    {
      'definition': 'I think digital humanities is an unfortunate neologism, largely because the humanities itself is a problematic term. The biggest problem is that the tent isnt big enough! I have participated in a number of DH events and they are strikingly similar to things like Science Online.'
    },
    {
      'definition': 'With that said, DH is at its best when it embraces the digital not simply as a means to the traditional ends of scholarship, but when it transforms the nature of what humanists do. The digital allows for scholars, librarians, archivists and curators to engage much more directly with each other and the public. Further, it allows them not simply to write for each other, but to build things for everyone.'
    },
    {
      'definition': 'Digital Humanities to me is any activity that engages computational media to develop and explore ideas relevant to our understanding of literature and culture.'
    },
    {
      'definition': 'The performance of humanities related activities in, through and with digital media.'
    },
    {
      'definition': 'A methodological approach that uses digital tools to pursue research in the humanities, and also study of the field of the digital environment.'
    },
    {
      'definition': 'An obscure association famously made up of isolated people jointly concerned about the materiality of digital surrogates, the virtual qualities of physical relationships between avatars, and the creation of their own simulated utopia.'
    },
    {
      'definition': 'Digital Humanities, at least for me, is an extension of the root Arts and Humanities disciplines. My experience tells me that computing and technology has led to many new resources and even more answers to research questions. Crucially, its allowed the researchers Ive worked closely with to ask new, previously unimaginable questions. Digital Humanities is a culture, a way of thinking, a new set of methods, and a new set of collaborations.'
    },
    {
      'definition': 'A field of study that looks at the application of digital technology to the research areas of the humanities.  It is not necessarily undertaking that humanities research, but examining the methodology and provision of possibilities for enabling that research or new conceptions of related research. The majority of work in this area, however, gets characterised by those outside the field as IT professionals just doing a bit of programming work for them while uselessly banging on about long-term preservation formats, open data, and not really doing real research.'
    },
    {
      'definition': 'I define the digital humanities as a methodology and as a field.  I dont see it as the logical telos of the humanities computing tradjectory, but rather as a parallel or sucessive movement. The digital humanities is a beautiful convergence of individuals interested in humanities scholarship, design, born-digital objects, technology and its impact on society, as well as contemporary history and culture.'
    },
    {
      'definition': 'Digital humanities is the synthesis of technical competencies in computing with critical thinking in fields such as history, literary criticism, cultural studies, textual studies, and information management.'
    },
    {
      'definition': 'The interaction between two world that cannot anymore be considered separately.'
    },
    {
      'definition': 'One upon a time, a Humanist found a computer and looked around to figure out what s/he could do with it...'
    },
    {
      'definition': 'Humanities research that examines or implements methods made possible by computers.'
    },
    {
      'definition': 'Develop web and 2.0 activities for research.'
    },
    {
      'definition': 'Digital Humanities, to me, is the practice of engaging in issues and discussions pertaining to Computing, and applying Humanities-based approaches for examining these issues. Conversely, the same could apply for looking at computing-based issues through a Humanities lens.'
    },
    {
      'definition': 'A new collaborative and social way to analyse, investigate, study and show new research themes related to the Humanities, using not only computer and digital technologies but also the web and all the internet applications available.'
    },
    {
      'definition': 'The digital humanities are a diverse area of potential research and inquiry ranging from applying humanities scholarship to computing problems (and vice versa, computing scholarship to humanities problems) to the more cultural and philosophical ideas surrounding our technology influenced world.'
    },
    {
      'definition': 'Digital humanities is the utilization of digital technologies and methods that influence how I practice my craft in the humanities. It is directed by the theories about how we engage in various technologies to learn in the humanities. As a historian, I seek to understand how museums and archives engage with digital tools and to understand how individuals utilize such tools to learn about the past.'
    },
    {
      'definition': 'Digital Humanities is a difficult concept to define; for me DH explores how and whether we can apply technology to our experience of history, heritage and culture. DH questions how technology changes the environment around us, physical and digital, and discusses whether those changes are for the better. I believe the concept of digital humanities is much more then just humanities computing; as society becomes increasingly digital, it become a way of life and it is important to understand how and why that is happening.'
    },
    {
      'definition': 'The convergence of computing and humanities scholarship and practices for the purpose of finding new approaches to the study of a given topic.'
    },
    {
      'definition': 'humanities by digital means.'
    },
    {
      'definition': 'Humanism and its universe, digitally.'
    },
    {
      'definition': 'Work that engages with the development of digital tools or uses these same tools within the traditional scope of Humanities.'
    },
    {
      'definition': 'Digital Humanities involves the use of computers, the internet and related technologies to enable the creation and sharing of humanities scholarship in ways not possible in traditional humanities practice. Digital Humanities challenges traditional understandings of the Humanities by fostering interdisciplinary collaborations and providing new perspectives on the objects of humanistic inquiry.'
    },
    {
      'definition': 'Digital Humanities is the deliberate, critical application of emerging technology to the study of traditional subjects such as literature, art, philosophy, and language, often (but not always) with a focus on how those traditional fields are now using emerging technology. We are deliberate and critical when we foreground the study of our own digital tools (for example, the forward-thinking digital humanist prefers the open-source tool to the proprietary one). We apply technology because we must participate in digital culture in order to understand it. Full participation in digital culture means contributing to (creating) the cultural economy, not simply observing (consuming).'
    },
    {
      'definition': 'Theres no way to divide humanities from its digital basis just as there was no way of separating the humanities from their previous (still alive) analog medium, the paper. We live, write, read, learn, work, digitally, and we create, deliver and use every content digitally as well.'
    },
    {
      'definition': 'Anything that involves production, sharing and co-creation of experience with digital tools.  May also be called local knowledge management.'
    },
    {
      'definition': 'Using computers to advance scholarship in the humanities.'
    },
    {
      'definition': 'Bringing digital computing technologies to bear in humanities-based modes of inquiry, and/or bringing humanities-based modes of inquiry to bear in digital computing technologies.'
    },
    {
      'definition': 'I define Digital Humanities as the natural evolution or extension of traditional academic humanities pursuits specifically through the use of digital technologies.'
    },
    {
      'definition': 'Digital humanities is an interdisciplinary, often collaborative meeting place where computing addresses the interests and concerns founded in the humanities (and vice versa). At times, digital humanities is highly applied and, at other times, theoretical and reflective, but always diverse and complex.'
    },
    {
      'definition': 'From using computer in another way than a typewriter to large infrastructures for research : I do prefer a large definition to grab all uses of IT linked to literary studies (which is my field). Ideally, it covers literary studies as well as electronic/hypermediatic literature.'
    },
    {
      'definition': 'It is the intersection between the humanities and computing science and information technology.  It means using computing technologies in humanities work, or making modern information technology the subject of humanities research, or creating humanities-focused technology. Note that its rarer to find the second definition actually being done, which is really too bad.'
    },
    {
      'definition': 'The Digital Humanities community continues and extends the traditions initiated within and long held by the conventional humanities teaching and research community; but Digital Humanists adopt computational approaches and technologically-driven methodologies to address traditional humanities problems and to research, respond to, and define new types of humanities problems and inquiry.'
    },
    {
      'definition': 'DH is a research discipline that bridges the gap between engineering and humanities. DH is not simply about engineering software for humanities scholars. Instead, DH is where disciplines from engineering and humanities combine their expertise in dealing with information per se. (And obviously, one potential outcome of such a joint research may be tools that can be used in the humanities.)'
    },
    {
      'definition': 'Area studies focused on the integration of information and communication technologies (ICT) to research and education in the fields of the Arts and Humanities, and on the development of computing tools to further that research.'
    },
    {
      'definition': 'Using digital tools to pursue the traditional concerns of the humanities while simultaneously reflecting on and responding to ways that digital tools, media, and culture are transforming those concerns.'
    },
    {
      'definition': 'Para mí la Informática Humanística es la disciplina científica que permite acercar los estudios humanísticos a la época actual, utilizando las herramientas, metodologías y medios de difusión nuevo que ha puesto en nuestras manos la informática.'
    },
    {
      'definition': 'The use of digital technology, including such tools as computers, video cameras and tape recorders at a minimum, to forward the traditional work of the humanities: the creation, storage and dissemination of critical and creative knowledge.'
    },
    {
      'definition': 'To me, the digital humanities are about harnessing digital technologies and tools in the quest for understanding and sharing human expression and experience. At their most fruitful, digital technologies offer both scholars and a public audience new ways of seeing and understanding our cultural heritage  and new ways of discerning patterns that were not possible (or were prohibitively difficult) with human analysis alone.'
    },
    {
      'definition': 'its the coherent and necessary evolution in Humanities research and disclosure. I frankly believe that Digital media is a new tool that can help us expand our possibilities, but it cant and must not replace the traditional methods of gathering and exposing information'
    },
    {
      'definition': 'I think that DH is a way to approach computer tools and languages from a critical point of view, to study and (try to) provide more structured and semantic digital contents. In a web of data, where contents are produced, shared and redistributed seamlessly trough different supports and devices (and space and time), this is a crucial issue.'
    },
    {
      'definition': 'I like to define it as injecting a little humanity into the machine. Bad metaphor?  How about: applying the lens of the social sciences to computing science, and using computing methods in humanities research.'
    },
    {
      'definition': 'Learning and sharing about who we are as human beings, past and present, through digital media and tools; Helping to develop digital techniques, tools, and methodologies that benefit the study of the humanities.'
    },
    {
      'definition': 'I am a non-believer, in this and most things.  Some humanists (very few now) only read and write printed books; some (more and more) read and write only on a computer screen; most of us do both.  Should we have codicological humanists, then?'
    },
    {
      'definition': 'Rather broadly:  humanities teaching and research that makes use of computers and even more importantly internet applications as an integral component of either the teaching or the research.'
    },
    {
      'definition': 'Digital Humanities is the use of digital technologies for the pursuit of a greater understanding of the humanities. An example of this would be the use of SQL, which is a database language, and Geographic Information Systems (GIS) to better understand ecclesiastical sites of Medieval Iceland.'
    },
    {
      'definition': 'Digital humanities involves the application of the digital to work in the humanities, practiced self consciously. DH encourages the humanist to engage with the technology and not just to consume it. DH is best experienced as both theory and practice.'
    },
    {
      'definition': 'Using computers to see and model what happens when people express themselves and communicate.'
    },
    {
      'definition': 'Digital Humanities is a new term that describes what is probably an old activity (or collection of activities) but which gives us a fresh image or metaphor for that work, so that it can be seen with new eyes. It allows for new connections to be made across what were previously very separate fields of interest, which is the essence of imagination and the creation of new knowledge.'
    },
    {
      'definition': 'Humanist Computing is the application of computational methods and associated tools to address specific humanities research problems. Distinct from general computing approaches, Humanities Computing is embedded within the research concerns of the disciplines and sub-fields that make up the humanities. The methods employed in the field may be used to uncover new knowledge about corpora or to visualise research data in such a way as to uncover additional insights and meaning. Succinctly Humanities Computing is about structuring, analysing and communicating humanistic knowledge in a critical and authorial way using computing technology.'
    },
    {
      'definition': 'I define it as the use of dataprocessing technology and techniques applied to the development, research, reporting, and teaching of humanities research questions.'
    },
    {
      'definition': 'The digital humanities is the use of digital methods and technologies in humanities teaching and research. Humanities computing, by contrast, can be reserved for the study and development of those methods and technologies.'
    },
    {
      'definition': 'Ill give the same definition from last year: I broadly define Humanities Computing/Digital Humanities as a field in which scholars within the humanities use or study computers or a digital environment (e.g. the WWW, video games, digital fiction, etc.) in their research. I consider myself to be a digital humanities researcher because I am studying digital short fiction and its communities in my thesis, but also because I sometimes use social science methods and computing tools (online questionnaires, quantitative/qualitative analysis, etc.), which reflects the interdisciplinary nature of humanities computing.'
    },
    {
      'definition': 'Digital humanities is a field of study characterized by critical analysis of the relationship between the produced surfaces of digital media and the information structures and cultural structures that produce them; alternatively (or additionally) it is characterized by a critical interest in how humanities scholarship is produced, consumed, and transformed in and through digital media.'
    },
    {
      'definition': 'Digital Humanities is any attempt to incorporate digital understandings or culture into scholarship, pedagogy and service. For my particular reasons, I define Digital Humanities as an attempt to use computing methods to understand 19th Century British literature from a book historians point of view. As a teacher, I use Digital Humanities to create a bridge among myself, my students and our contemporary culture. We use all kinds of tools to get into 19th Century print culture, and not just tools to assess the 19th Century moment but to also create content that can serve as a critique of our own use of tools, such as Twitter, Moodle, ClassSpot, tech-enhanced teaching facilities. For instance, we explore gaming as a way to discuss the technological upheaval of the printing press in the early 1900s. Thats just a tidbit of my world as a Digital Humanist.'
    },
    {
      'definition': 'For me, its the use of computing technologies to allow humanities research that would otherwise prove impossible.'
    },
    {
      'definition': 'Digital Humanities refers to efforts to link the humanities disciplines with the ever-increasing role of technology in the academy, the scholarly community, and the life of the mind as it is made manifest throughout our evermore global intellectual community. It ranges from undergraduate blogs on energy-savings (sponsored by sustainability initiatives at numerous institutions) to rarified reflections on rhetorical analysis, via word-count searches, of Lord Byrons journals. Digital knowledge-work will define the activity of humanities researchers, scholars, and teachers in the coming decades.  (See also my 2009 definition)'
    },
    {
      'definition': 'DH is the use of computing technologies to enhance humanities research and the use of humanities methodologies to enhance computing technologies.  its hallmark is interdisciplinarity.  DH is about recognizing digital technologies as yet another tool to assist in humanities research - not the only tool -  and also about recognizing that the humanities must play a strong role in shaping digital technologies in the future.'
    },
    {
      'definition': 'the development, study and use of digital tools in the arts and humanities'
    },
    {
      'definition': 'Using digital media to explore, create, analyse and decode meanings in cultural products, current affairs and social life.'
    },
    {
      'definition': 'I think the beginning of my course description for Humanities Computing may be a start: In 1924, I. A. Richards began Principles of Literary Criticism by declaring, “a book is a machine to think with.” As the technology of texts has shifted over the ensuing 85 years, our understanding of the book-machine and how we think about/with it has also evolved. In this course, we will explore non-traditional modes of literature (aka “New Media”) along with computational methods for analyzing texts. We will be working with some of the more advanced aspects of XML, XSLT, XHTML and CSS.  Additionally, we will be considering many theoretical works that have an established place in the Digital Humanities canon . . .'
    },
    {
      'definition': 'Modelling and recording traditional humanities data sets in such a way that they can be read by both humans and machines.'
    },
    {
      'definition': 'DH is that which happens digitally in each of the disciplines of the humanities. It is to be distinguished from humanities computing, which is what these separate digital activities have in common and which takes place at some kind of institutional centre, be it physical or notional.'
    },
    {
      'definition': 'Digital Humanies is using digital accesories / equipment / as a modern technical support for studing / researching in Humanities,, e. g. literary science.'
    },
    {
      'definition': 'An ongoing, active, open action to take or develop tools and content that give all scholars access to materials that they need and to encourage sharing of materials. These materials fall mostly into the areas traditionally associated with the humanities. The very activity of aggressively growing research in an open environment will doubtless change the definitions and limitations that former labels gave to us and our disciplines.'
    },
    {
      'definition': 'Digital Humanities is the marriage of two areas of study heretofore considered incompatible - IT and the humanities.  DH primarily involves the use of IT to gain new insights into the humanities.  The keywords are scale, navigation, and exchange.  These tools afford the humanist the ability to analyze large bodies of work on a previously unimagined scale.  They also allow for ease of research/data navigation and provide an efficient means of research/data exchange.  Secondarily, DH involves an analysis of the humanistic implications of information technology.'
    },
    {
      'definition': 'Digital humanities attempts to bring humanistic inquiry and the artifacts of human experience into useful dialogue with digital technology.  It is, at once, a practical and a philosophical endeavor: a matter of building and of theorizing the built.  Practitioners are as likely to be adept at Java as they are post-structuralism; as drawn to the iPhone as they are to Moby Dick; as committed to a kind of optimistic futurism as they are deeply skeptical of a posthuman condition.  Digital humanities is also one of most exciting fields in the humanities today, with a burgeoning community of enthusiasts ranging from undergraduate students to senior scholars.'
    },
    {
      'definition': 'The development, study and application of new technology techniques and methods to traditional modes of scholarship.'
    },
    {
      'definition': 'Digital Humanities is any attempt to incorporate digital understandings or culture into scholarship, pedagogy and service.  For my particular reasons, I define Digital Humanities as an attempt to use computing methods to understand 19th Century British literature from a book historians point of view.  As a teacher, I use Digital Humanities to create a bridge among myself, my students and our contemporary culture.  We use all kinds of tools to get into 19th Century print culture, and not just tools to assess the 19th Century moment but to also create content that can serve as a critique of our own use of tools, such as Twitter, Moodle, ClassSpot, tech-enhanced teaching facilities.  For instance, we explore gaming as a way to discuss the technological upheaval of the printing press in the early 1900s.  Thats just a tidbit of my world as a Digital Humanist.'
    },
    {
      'definition': 'Humanist Computing is the application of computational methods and associated tools to address specific humanities research problems. Distinct from general computing approaches, Humanities Computing is embedded within the research concerns of the disciplines and sub-fields that make up the humanities. The methods employed in the field may be used to uncover new knowledge about corpora or to visualise research data in such a way as to uncover additional insights and meaning. Succinctly Humanities Computing is about structuring, analysing and communicating humanistic knowledge in a critical and authorial way using computing technology.'
    },
    {
      'definition': 'Digital Humanities, from my perspective as an educator, has to do with helping students use the skills they have (and are learning) as writers and critical thinkers to compose and critique multi-media works in both academia and their daily lives.'
    },
    {
      'definition': 'Creating, documenting, deploying and supporting software used in Humanities teaching and research; digitization, archiving and publication of Humanities texts through electronic means; using digital tools to generate and answer research questions related to Humanities texts; collaborating on Humanities projects through digital means; etc. etc...'
    },
    {
      'definition': 'Digital Humanities: the creation and preservation of extensible digital archives to document, and tools to interact with, material culture.'
    },
    {
      'definition': 'For me, Humanities Computing means the transformation of creative and informative communication (for all individuals, not just academics, students and other experts) via an ever- and expanding array of information and communication technologies, an amplification of the individuals power to research, to write, to communicate, to publish and to participate in, and create new spaces in, the public sphere. Just as I feel that the Humanities enrich everyones life, humanities transformed by ICTs enrich everyones life.'
    },
    {
      'definition': 'Digital Humanities to me encompasses any of a multitude of approaches to the arts and humanities that address and embrace the empowering societal shifts afforded by technology.  Digital Humanities is about open communication, collaboration and expression.  It mirrors my own artistic process of A/R/Tograpy, in that DH incorporates art, research and technology.  It is about discovery and sharing as much as it is about archival and data visualization.  Above all, Digital Humanities is about shedding light on the human experience and ultimately our own interconnectedness.'
    },
    {
      'definition': 'DH is a way to interrogate data, computing, and computation using humanities methods and DH is a way to interrogate the humanities with digital and computational methods.'
    },
    {
      'definition': 'Im defining DH by helping build this site!'
    },
    {
      'definition': 'The exercise of defining digital humanities can often leave us with more questions, lingering theories and answers that allude to some aspect of the question but which inevitably lead to assertions that perhaps, digital humanities, is open to interpretation. Essentially, what it is or is not is based on “your” interpretation and perspective as either a practitioner, theorist or an observer. In its simplest guise, digital humanities (from my perspective) is the provision and development of technology for the humanities, which is itself focused on artifactual evidence to theorise and explore human culture, thought and society.'
    },
    {
      'definition': 'DH is a very under-acknowledged term encompassing a vast array of research, knowledge, and teaching. DH, or Digital Humanities, are concerned with intersecting computers and digital work with that of the humanities.'
    },
    {
      'definition': 'seeking the meaning of humanity through digital media.'
    },
    {
      'definition': 'Digital Humanities for me is what happens when we plug humanities into computationally powered amps, and an audience that was expecting the comforts of communal affirmation has to decide whether or not to pick up new instruments and to experiment and push the limits.'
    },
    {
      'definition': 'Digital Humanities is any scholarly activity that makes extensive use of one or more of the new possibilities for teaching and research opened up by the unique affordances of digital media. These include, but are not limited to, new forms of collaboration, new forms of publication, and new methods for visualizing and analyzing data.'
    },
    {
      'definition': 'Digital Humanities transcend forms. They are (and, are not) the brush, page, note, field, data, transformed, linked and made of light.'
    },
    {
      'definition': 'A performance featuring humans and machines'
    },
    {
      'definition': 'DH is me, Devin Higgins. Hi.'
    },
    {
      'definition': 'Collaborative approach to resolve humanities inquire through the use of technological means.'
    },
    {
      'definition': 'The Humanities 2.0: the familiar endeavour of deepening our understanding of the relationships between texts, sounds, and other mediums of cultural communication within the more unfamiliar world of digital tools and technologies.'
    },
    {
      'definition': 'Digital humanities is a subset of humanities scholarship concerned with the historical and prospective influences of technology on human culture.'
    },
    {
      'definition': 'I define the digital humanities broadly, where humanists build things that could not be done without a computer. Ideally, DH is done publicly, openly, and collaboratively across humanistic disciplines.'
    },
    {
      'definition': 'A methodology to improve research as well as a medium with which to publish scholarship and engage with fellow scholars and the public.'
    },
    {
      'definition': 'Humanities in the 21st century. The exploration and exploitation of material is so exciting and the outcome so interesting - we as scholars of humanities are operating in the new golden age of scholarship.'
    },
    {
      'definition': 'A shift in Humanities work towards collaboration and use of technology.'
    },
    {
      'definition': 'as having a lot less to do with computers than I once thought: as a conservative movement in the humanities.'
    },
    {
      'definition': 'DH is 1) using new digital tools to do humanistic research and 2) using humanistic methods to analyze new digital tools.'
    },
    {
      'definition': 'For our community college students, we focus on the intersection of technology and culture and the humanistic and historical context in which this intersection is situated.'
    },
    {
      'definition': 'Humanities by digital means.'
    },
    {
      'definition': 'I see DH as an emerging interdisciplinary field of study where digital technologies are incorporated (as method and/or topic) into humanities research practice.'
    },
    {
      'definition': 'The creative interface between knowedge and technology'
    },
    {
      'definition': 'Humanidades digitales es una posibilidad de comprender la tecnología de otras maneras'
    },
    {
      'definition': 'Teaching, research, and outreach activities taking place wherever humanities and digital technologies intersect.'
    },
    {
      'definition': 'Incorporating technology and tools into the field of humanities research to discover and document new contexts and relationships'
    },
    {
      'definition': 'DH is a cover term for a wide variety of activities that attempt to explore and expand areas of knowledge typically examined in the Humanities by developing and/or applying computational tools or methods in ways best suited for these areas. DH is also a cover term for a supporting community of practitioners who share a common interest in the tools and methods--and challenges--generated by the activities DH scholars, as well as potentially useful activities in fields outside the traditional Humanities.'
    },
    {
      'definition': 'Leveraging technology/computing to further scholarship in the Humanities and to facilitate collaboration amongst scholars, including opportunities for faculty and students to conduct research together.'
    },
    {
      'definition': 'The use of technology to make teaching, research, and learning better, whether through new tools and ways of asking questions, or innovative new forms of scholarly presentation and communication.'
    },
    {
      'definition': 'My stock curmudgeon answer:\nHumanities is humanities, digital or not -- the study of literature, fine arts, history, language, and philosophy. We dont distinguish digital sociology or digital astronomy, so why digital humanities? Just because computers are involved doesnt mean the basic nature of the subject area is any different than it has been been traditionally. Computers allow for doing things with texts and other cultural artifacts that could not be done feasibly without the computational power and storage modern computers provide. Computers should be considered an extension of the scholars mind -- very useful tools indeed.'
    },
    {
      'definition': 'The human side of our highly digital world.'
    },
    {
      'definition': 'The implementation of digital tools and methods to study image/text relationships and visual space & culture, both in critical comics scholarship and in my practice as a cartoonist.'
    },
    {
      'definition': 'Interdisciplinary, collaborative, design-aware, iteration-positive, oriented toward accessibility (in many senses). Applies digital technologies alongside more conventional ones to cultural and social questions & has the potential to enable new questions through the use of those technologies.'
    },
    {
      'definition': '-Using digital tools for humanities research.'
    },
    {
      'definition': 'I see DH as a set of resources -- software, texts, tools, etc. -- that contribute building knowldge. A network, a crossroad, a bridge, a meeting point.'
    },
    {
      'definition': 'DH is humanities work which uses/engages/builds with digital tools and possibilities.'
    },
    {
      'definition': 'For me, the Digital Humanities is more than just an area of study, it is a methodology, a means of approaching our work and our interests. While simultaneously embracing and questioning the technology that surrounds us, we also commit ourselves to a willingness to explore, create, play, and most importantly, collaborate.'
    },
    {
      'definition': 'Doing research with digital materials and tools in a collaborative and open fashion. Not everyone needs to be a builder, though working with someone who can helps!'
    },
    {
      'definition': 'DH are the Humanities that need to develop in these days. Society is changing, culture is changing, therefore Humanities have to change with them. If the social and cultural environment is digital, Humanities also need to be digital. That is why DH are an opportunity, because they may stand as a guide for society to make this cultural change successfully.'
    },
    {
      'definition': 'Using computing/digital technologies to practice humanities scholarship in innovative ways--and using humanistic knowledge and approaches to understand digital technology.'
    },
    {
      'definition': 'Research in DH uses digital technologies to extend academic study and teaching of the humanities disciplines.'
    },
    {
      'definition': 'New habits for a new era. Some technological nudges to enhance research capabilities in humanities'
    },
    {
      'definition': 'Digital Humanities is just our everyday normal way of doing business, but with slightly more awareness than usual that a lot of what everybody does is digital — and an awareness of some of the things that that might mean. And a willingness to think about them and try digital options.'
    },
    {
      'definition': 'Using technology to reach new audiences with the answers to very old questions.'
    },
    {
      'definition': 'DH still means digital history to me.'
    },
    {
      'definition': 'Digital History is the act of imaging and making historical arguments by and through digital media.'
    },
    {
      'definition': 'Digital Humanities is the act of embracing technologies and methodologies to improve and create new ways of doing humanities scholarship.'
    },
    {
      'definition': 'The amalgamation of the humanities and computer science to create digital tools and resources that allow further research in the discipline of Humanities.'
    },
    {
      'definition': 'An impulse more than a method.'
    },
    {
      'definition': 'The use of computational tools and techniques to explore questions in the humanities, and the concomitant reflection on the use of those tools and techniques in that exploration.'
    },
    {
      'definition': '“Digital humanities is a diverse and still emerging field that\nencompasses the practice of humanities research in and through information technology, and the exploration [approaches] of how the humanities may evolve through their engagement with technology, media, and computational methods.”\n-- Modified from Digital Humanities Quarterly (DHQ)\n(see DHQ website, http://www.digitalhumanities.org/dhq/about/about.html)'
    },
    {
      'definition': 'A space for collaboration, creativity and critical reflection on the use and application of digital technology in the humanities'
    },
    {
      'definition': 'DH is a big and probably over-stuffed box that holds an increasingly disparate menagerie of projects, processes, methods and positions that somehow manage to involve humanistic questions and digital technology (both broadly defined). At its best, it can be the most open-minded and egalitarian place in the humanities. At its worst, it can be, well, frustrating. It is practiced by some of the best folks I know and dismissed by some of the other best folks I know.'
    },
    {
      'definition': 'DH is...\n...creating new problems, challenges and many opportunities by using new technologies.'
    },
    {
      'definition': 'At its broadest and most concise, I define DH as using digital technology as a lens to examine cultural artifacts.'
    },
    {
      'definition': 'its a hydra--one could define DH as using digital tools and methods for humanities research, as taking the digital as object of study, as the study of networks and communication. Often with an emphasis on building, making, doing.'
    },
    {
      'definition': 'Las Humanidades Digitales es un término que engloba este nuevo campo interdisciplinario que busca entender el impacto y la relación de las tecnologías de cómputo en el quehacer de los investigadores en las Humanidades.'
    },
    {
      'definition': 'Using technology to make the study, presentation, and exploration of history fun and engaging!'
    },
    {
      'definition': 'Dh = Humanities + uptodate technology + passion'
    },
    {
      'definition': 'The intersection of digital technologies and the humanities. Others will have greater concern with defining the first term; I want to remember that humanistic inquiry involves the preservation, translation and interpretation of inherited cultures. So digital humanities do all of that through the tools and methods available in digital technologies. In a real way, the digital changes and transforms culture, too.'
    },
    {
      'definition': 'working with computers to process research questions in the humanities--so we can see and understand more about human beings and their arts and literature--the material traces of their mental activities--than we can do with unassisted eyes and brains.'
    },
    {
      'definition': 'DH is the digital study of cultural heritage, or the study of digital cultural heritage, or something in between. Or maybe something else entirely.'
    },
    {
      'definition': 'A community of practice who foregrounds the reflexive and theoretically-informed application of digital techniques to humanities subject matter.'
    },
    {
      'definition': 'Using digital tools to research the humanities, or using humanities methods to research the digital.'
    },
    {
      'definition': 'As the use of digital technologies to facilitate and/or inform work in the humanities.'
    },
    {
      'definition': 'Digital humanities is combination of methodologies and tools that transform humanities scholarship and teaching. Digital humanities enables new questions to be asked by incorporating new media (ex. social media) and new methods (ex. distant reading) into research and the classroom. Digital humanities doesnt replace traditional sources or methods; instead, it adds new opportunities the tradition of humanistic inquiry.'
    },
    {
      'definition': 'Using computational technologies for analysis and making them more readily available for access and allowing others to examine, reuse, and discuss the artifact.'
    },
    {
      'definition': 'Humanities research and teaching in the digital paradigm - methodologically and theoretically.'
    },
    {
      'definition': 'DH involves the use of computers either to conduct humanities research or to communicate its results.'
    },
    {
      'definition': 'The span of activities between digitizing the humanities and humanizing the digital.'
    },
    {
      'definition': 'I know it when I see it.\nLo reconozco cuando lo veo.\nУзнаю, когда вижу.'
    },
    {
      'definition': 'The humanities in and for the age of Big Data.'
    },
    {
      'definition': 'Convergence and Inclusion. The first because different disciplines are collaborating to create common languages. The latter as DH allow peripheral or hidden resources to be taken into consideration in the development of research questions.'
    },
    {
      'definition': 'Digital humanities includes the set of research and experiments that aim to facilitate the use of digital resources, making them more intuitive and accessible.\nHumanidades digitais engloba o conjunto de pesquisas e experiências que visam facilitar a utilização dos recursos digitais, tornando-os mais intuitivos e acessíveis.'
    },
    {
      'definition': 'For me right now, its using new(ish) tools to better understand old texts.'
    },
    {
      'definition': 'Who the hell knows....I certainly dont'
    },
    {
      'definition': 'The use of computing and technology to advance humanistic research and pedagogy.'
    },
    {
      'definition': 'A crossroads; where the humanities and computing intersect.'
    },
    {
      'definition': 'DH is a means of exploring humanistic inquiries alongside digital technologies.'
    },
    {
      'definition': 'DH breaks open opportunities to ask and research new questions in humanities, stimulates novel approaches and visualizations of humanities work, and gives us a chance to make more effective relevant interventions to broader publics.'
    },
    {
      'definition': 'I define Digital Humanities as teaching, research, and projects in the humanities (and other related disciplines) that takes advantage of the affordances of digital tools and computational methods. its definitely not a perfect definition!'
    },
    {
      'definition': 'Digital Humanities is any kind of work undertaken at the boundaries of arts and the computer sciences.'
    },
    {
      'definition': 'DH is a term that covers all scholarly methods, practices, endeavors, and challenges lying at the intersection of Humanities and Information science and technology.'
    },
    {
      'definition': 'I would define the Digital Humanities as the use of digital tools in any areas of interest that are Humanities related.'
    },
    {
      'definition': 'A realm of digital creations made by experts and amateurs in the humanities field.'
    },
    {
      'definition': 'Increasingly, I define DH with reluctance.'
    },
    {
      'definition': 'DH is a meta-field of study in which practices and theories are applied to topics from other humanities and social sciences disciplines.'
    },
    {
      'definition': 'Digital Humanities offer an opportunity to approach conventional material in a specific way to develop and answer new scientific questions.'
    },
    {
      'definition': 'I define the digital humanities as any activity that makes use of uniquely digital methods of analysis, criticism, and data display to open a new window into a particular subject of the humanities. For me, DH offers methods of analyzing and making widely available aspects of the humanities that would not otherwise be available. A digital humanist, then, is not necessarily one who seeks to deliberately engage with a digital interface, but anyone who uses technology to bring new forms of analysis to bear on humanist subjects.'
    },
    {
      'definition': 'DH is where the traditional fields of the humanities meet the technological advances, and increased accessibility, made possible by computers. It enables researchers to combine traditional methods with the processing power of computers.'
    },
    {
      'definition': 'DH is the application of digital and computational methods, often data-intensive, to the traditional concerns of the humanities. These new methodologies and tools are not ends in themselves, but rather means of asking old questions in new ways, identifying new questions, and introducing new questions to the field that can only be asked through collaboration both among individual scholars and between scholars and software applications.'
    },
    {
      'definition': 'people using digital tools to make sense of our world--past, present and future.'
    },
    {
      'definition': 'For the developing Digital Humanities group at West Chester University, the Digital Humanities include:\n1. Studying technology & the culture of technology. This approach subjects technology to the core skills of critical thinking and ethical responsiveness that define humanistic studies as a discipline. (Technology as Object);\n2. Using technology to accomplish one of the key missions within the humanities, e.g. teaching with technology, writing with/as technology, computational methods in textual analysis/stylistics. (Technology as Method);\n3. Creative and critical production using digital technologies—XML markup, coding & scripting, web production, & user interaction (Technology as Making).   [In the words of my colleague, Randall Cream]'
    },
    {
      'definition': 'DH is the inevitable future at which we thought to have arrived decades ago. Never quite living up to its own hype and underestimated nonetheless.'
    },
    {
      'definition': 'Digital humanities is quilt making.'
    },
    {
      'definition': 'DH is the field in which Humanities and Information Technologies can interact and support each other. On one side Humanistic competences can help Human Language Technologies to tackle one of the most difficult challenges of the discipline, which is the handling of the semantics of human language texts. On the other side Information Technologies can support research activities where the analysis of texts and images plays a crucial role and that are traditionally qualified as Humanistic (e.g. Historical and Literary Studies; Cultural Heritage).'
    },
    {
      'definition': 'DH is the perfect cocktail of computer science and rationalization of culture and humanities.'
    },
    {
      'definition': 'A new paradigm for knowledge as a result of digital technologies, open and collaborative cultures and Social Sciences and Humanities.'
    },
    {
      'definition': 'To me, Digital Humanities is the novel use of digital tools and media to study, teach, and preserve records about the human condition.'
    },
    {
      'definition': 'New tools for new Studies.'
    },
    {
      'definition': 'A democratic and open-source social movement at the intersection of humanities research and computing technology. (For an explanation of this, see http://majining.com/?p=140)'
    },
    {
      'definition': 'No surprises here: creating new questions and knowledge about the humanities; using the humanities to ask questions about digital technology. Im still beginning.\nFor me, Im telling my English lit students that DH is about making stuff. I want to enable English Lit students to ask different questions about literature and share their knowledge in a different kind of way.'
    },
    {
      'definition': 'I define the digital humanities as two things. Firstly, I think of it as using new and emerging technologies to enhance our understanding of our humanistic fields of inquiry. For me, as a historian, it is learning new things through technology that we couldnt learn otherwise. Secondly, I think of it as playing and exploring new methods of scholarly communication - i.e. putting history online.'
    },
    {
      'definition': 'I try not to define it -- I perform it!'
    },
    {
      'definition': 'a crossroads between humanist tradition and the digital age.'
    },
    {
      'definition': 'DH is the application of digital tools to traditional Humanities research and scholarship methodologies with an aim towards producing digital content, often in a collaborative environment.'
    },
    {
      'definition': 'With a substantial footnote! See Terras, M. et al. Defining Digital Humanities. A Reader. Ashgate, 2013.'
    },
    {
      'definition': 'Engaging technology as a humanist and using technology to engage everything else as humanist; or, being a humanities scholar in the modern, technology mediated world.'
    },
    {
      'definition': 'Application of computational methods in humanities scholarship and media production'
    },
    {
      'definition': 'The application of computational power to the solution of humanities questions.'
    },
    {
      'definition': 'DH is the transfer of texts from traditional tactile to digital media.'
    },
    {
      'definition': 'The humanities are the humanities. Technology is merely a tool (albeit a powerful one), not a defining factor of a discipline. You use it or you dont. The Digital Humanities do not exist.'
    },
    {
      'definition': 'I define DH as a way of exploring a text on multiple levels in order to allow for an enhanced understanding.'
    },
    {
      'definition': 'its like English... but technological and digital.'
    },
    {
      'definition': 'its what I do much of the time? its both a familiarity with digital methods and the ability to easily use digital tools for scholarship, and to do it responsibly. its also a critical application of these tools and methods.'
    },
    {
      'definition': 'DH is a sort of revolutionary activities with integration of various methods and fields for exploring potential of the humanities through digital technologies.'
    },
    {
      'definition': 'A set of principles, values and practices within the study of cultural artifacts meets the computer and the electronic medium.'
    },
    {
      'definition': 'The application and use of digital technology in ones everyday life.'
    },
    {
      'definition': 'On a computer...where the traditional humanities become virtual and enter a realm of encoded information, ultimately making information more accessible.'
    },
    {
      'definition': 'I think that DH can be defined as the act of learning through making. Digital humanities uses research and technology to create a new realm of knowledge which can allow for a different understanding of the humanities which would otherwise be inaccessible.'
    },
    {
      'definition': 'The Digital Humanities intersect humanities disciplines with computing technologies. To me, DH is collaborative and interdisciplinary. DH is creative, thoughtful, and explorative. It has welcomed (and helped to grow) my interest and expertise in information design and visualization.'
    },
    {
      'definition': 'Peering further into the shadows'
    },
    {
      'definition': 'its using technology for humanities research, teaching, and publication.'
    },
    {
      'definition': 'Thats a tough one. I think Matthew Gold et al defined it very well as did the ubiquitous Hayles. Digital Humanities, for me, brings the humanities to the forefront. Just speaking for my own discipline, English, we bring an ability to read closely and analyze language and its uses. We read texts of all kinds as performing cultural work and, in turn, we suggest or even produce new ways of thinking about those texts. Digital humanities allows us to use a vast set of critical tools to analyze and create ways of being in the digital realm.'
    },
    {
      'definition': 'Digital humanities is the use of computational tools or approaches to find patterns in humanistic production, when those patterns are then used for interpretive purpose.'
    },
    {
      'definition': 'DH, for me at least, is more about the Humanities than about the Digital. While the pervading digital (and online) structure has some part in change, its from culture - and shock of differing cultures - that such changes are truly born. So, DH is pretty much a way to explore the role played by the digital within a much larger context, as well as an exploration on how to use the same digital to further understand the intricacies of culture.'
    },
    {
      'definition': 'DH is the growing set of practices and projects geared around humanities inquiry that strategically involve digital resources.'
    },
    {
      'definition': 'I try not to.'
    },
    {
      'definition': 'Digital tools and methodologies thoughtfully applied to humanistic research questions, or the critique thereof.'
    },
    {
      'definition': 'Where humanities research is heading - using all of the digital tools and computational methodologies at our disposal to support traditional humanities research as well as developing new ways of considering humanities questions.'
    },
    {
      'definition': 'A study of the humanities inspired and informed by, though not confined to, computing and machines.'
    },
    {
      'definition': 'A history of engagement with computing by humanists.'
    },
    {
      'definition': 'Asking humanist questions with technology-assisted methods, followed by humanist critical thought'
    },
    {
      'definition': 'Broadly.'
    },
    {
      'definition': 'For me, digital humanities embodies many things. From pedagogy to project management to research to networking, digital platforms and technologies hold the potential to enhance individual scholarship as well as make knowledge more readily available for a wider audience, on a variety of levels.'
    },
    {
      'definition': 'using digital tools to explore, analyze, and disseminate humanities scholarship'
    },
    {
      'definition': 'using new methods to find out more about old things'
    },
    {
      'definition': 'Digital humanities represents the intersection of humanist questions and concerns with new opportunities for interrogation and interpretation provided by digital applications and platforms. its a very big umbrella that covers everything from mapping to data-mining, aggregators to online exhibitions. As a public historian, I am especially interested in the way in which the digital humanities allows for expanding the reach of our interpretation, to increase the number of stakeholders in our work through user-generated content, and to make our applications and platforms available to those who might not normally have access.'
    },
    {
      'definition': 'On one level, digital humanities is about applying computational methods to questions and problems that have traditionally interested scholars in the humanities. Computational analysis can make it possible to tease out patterns or relationships that are difficult, or impossible, for humans to detect. The purview of the digital humanities extends beyond methodology, however. It is also about raising new questions and exploring topics such as digital literacy and the cultural impact of new media. Whatever the approach, academic libraries have an important role to play in providing the infrastructure and support that digital humanities projects require in order to be sustainable.'
    },
    {
      'definition': 'its digitally mediated humanistic inquiry.'
    },
    {
      'definition': 'Active and critical engagement with computing in the pursuit of humanistic research questions.'
    },
    {
      'definition': 'An approach to research in the humanities harnessing technological capacity in order to extend out human capacities to read, to see and to comprehend.'
    },
    {
      'definition': 'The Digital Humanities are an umbrella discipline for humanities scholars and educators who adopt digital technology as the environment for the curation, organization, production and dissemination of their scholarship and as a platform for their teaching, with the objective to enable sharper focus on the qualitative evaluation of information that is at the core of humanistic inquiry.'
    },
    {
      'definition': 'Incorporating things like text mining, data visualisation, community building and curating online exhibitions and collections, Digital Humanities is the emerging field concerned with how studies of History, Literature, Music, Philosophy, Sociology, Performing Arts and other traditional humanities disciplines are utilising new digital tools.'
    },
    {
      'definition': 'DH, standing for Digital Humanities is a kind of all encompassing term that couples digital tools and processing with the work of the humanities. To me personally DH represents the application of tools and programs to better understand, organize and represent texts.'
    },
    {
      'definition': 'DH is an evolving form of creation that focuses on the point of intersection between traditional humanities topics and looks at them through the lens of the digital.'
    },
    {
      'definition': 'New tools to access humanities sources. New ways to analyse and interpret humanities sources. New ways to thinks about the humanities.'
    },
    {
      'definition': 'For me, Digital Humanities is very similar to an English class just with a computer component to it.'
    },
    {
      'definition': 'Digital humanities is the art of human record in digital form and it is the study of that record using digital tools for new insights. observing all digital media, data, and computational analysis as text.'
    },
    {
      'definition': 'Digital humanities involve situated and embodied engagement in humanities research and teaching through the development or application of digital technologies, in conjunction with the critical analysis using humanities frameworks and epistemologies of the implications of such activities. These inquiries bleed into considerations of mediation more generally, and of the transformative impacts of the digital turn, particularly of new modes of representation, publication, collaboration, dissemination, networking, and expression, on culture and society.'
    },
    {
      'definition': 'DH includes 3 aspects: using digital materials, tools, and methods in the humanities; developing digital materials, tools, and methods for use in the humanities; and subjecting the digital to humanities study.'
    },
    {
      'definition': 'I would define DH as the many different digital engagements, both academic and community-emergent, with humanities-related materials and theories, as well as the digital production of new humanities materials and theories.'
    },
    {
      'definition': 'Troubleshooting, troubleshooting, troubleshooting.'
    },
    {
      'definition': 'The digitally mediated practice of the Humanities.'
    },
    {
      'definition': 'The Digital Humanities is an environment that encourages scholars to develop and apply digital tools to new and old questions.'
    },
    {
      'definition': 'Using digital tools and methods to carry out humanistic inquiry from new perspectives and to ask new questions about the humanities.'
    },
    {
      'definition': 'I see the digital humanities as a set of methods that apply information technologies to humanities problems. For me, DH presents a set of tools to use when collecting, analyzing, and visualizing data - whether that data is derived from text, images, code, sound, or any other medium.'
    },
    {
      'definition': 'what they said ... because really, it is. i dont have a new spin on the definition. to me it is not an elusive thing, this digital humanities. it is part of my job as a librarian. the happy part i might add. i strive to welcome folks who want to get their feet wet while challenging myself to learn more when partnering with the wizards.'
    },
    {
      'definition': 'Harnessing the power of computing technology to formulate and pose different questions to new and familiar sets of data.'
    },
    {
      'definition': 'The intersection of humanities inquiry and digital technologies.'
    },
    {
      'definition': 'DH seems to be an evolving field of inquiry, research, pedagogical practice and knowledge production that involves the intersection of digital tools/practice with work in the humanities.'
    },
    {
      'definition': 'The definition of digital humanities is continuously mutually negotiated by locally situated actors for specific situated purposes'
    },
    {
      'definition': 'Using computational methods and approaches to augment and enhance traditional humanities disciplines.'
    },
    {
      'definition': 'The study of things, digitally. Or, from time to time, the study of digital things.'
    },
    {
      'definition': 'Digital Humanities is a way of seeing the networked nature of our work and our field as it adds to and pulls from other disciplines.'
    },
    {
      'definition': 'Using digital tools to create within and communicate about humanities research'
    },
    {
      'definition': 'DH is an umbrella term that refers to scholarship, projects, and teaching methods in the humanities that acknowledge the ways that digital media and online culture have transformed our ways of seeing and interacting with the rest of the world.'
    },
    {
      'definition': 'For me, DH is the multiple ways that scholarship intersects with computing. This ranges from developing prototypes to engaging in collaborative annotation practices to studying new media trends, and, of course, much more. The most exciting bits (& bytes!) are the unexpected ones.'
    },
    {
      'definition': 'Digital humanities is a discipline that promotes hands on experience as an important way of learning. Digital humanists also work towards creating online editions of texts are more accessible, and so that full texts, portions of texts, or a combinations of texts can be analyzed.'
    },
    {
      'definition': 'digital + humanities = digital humanities :)'
    },
    {
      'definition': 'How do I define DH? Reluctantly.'
    },
    {
      'definition': 'Using digital tools to explore, investigate, and interpret the human condition through time and space.'
    },
    {
      'definition': 'To me, DH embodies research, teaching, and scholarship that is primarily focused on the intersection and relationship of the digital and the humanities.'
    },
    {
      'definition': 'Digital Humanities is an interdisciplinary, dynamic, and evolving field of inquiry that creates space for exploring human culture through digital methods and technologies. It offers opportunities to answer, augment, and interrogate existing humanities scholarship; constantly asking questions and offering new possibilities.'
    },
    {
      'definition': 'Digital Humanities is how the study of text will remain challenged, bringing new dimensions and dynamics of thought to the world of the written language.'
    },
    {
      'definition': 'Digital Humanities is DIGITAL humanities and digital HUMANITIES. That is, it is the productive process wherein the technology cannot properly function without the scholar and vice versa. The result is a new creative method and product'
    },
    {
      'definition': 'Digitizing as much as the world as we can'
    },
    {
      'definition': 'Looking at old things in new ways, looking at new things in old ways.'
    },
    {
      'definition': 'The application of methods and technologies from computer science to the practice and publication of the study of the humanities.'
    },
    {
      'definition': 'For the Newberry, Digital Humanities involves not only thinking through the challenges of integrating digital assets, publications, and resources into the array of materials available to our readers, but also understanding the creative process that goes into the resources and policies of other institutions around the world.'
    },
    {
      'definition': 'What happens when you start using computers to study humanities subjects.'
    },
    {
      'definition': 'use of digital tools to create web objects of interest to traditionally defined humanities disciplines, including history'
    },
    {
      'definition': 'The Digital Humanities is the imagined community of a diaspora of humanists whom, having been displaced by the great neoliberal and technocratic transformation of education, have sought to reclaim the homeland of academia by joining the revolutionary, if ambivalent, power of digital technology to the ancient labors of cultural interpretation, historical consciousness, and aesthetic education.'
    },
    {
      'definition': 'var DH = Multi[disciplinar, cultural] + [Serendipity,fun] + academic research;'
    },
    {
      'definition': 'The ultimate conundrum...\nFor me, there are three types of DH practitioner: the researcher who actively uses digital techniques as an integral part of their praxis, the specialist tool user (e.g. GIS specialist) and the DH tool creator. In that context, its difficult to define DH as it can be radically different depending on the person engaging with it.\nHaving said all that, in my opinion to be truly at the cutting edge of DH, you need to be thinking philosophically about how digital praxis is fundamentally (if at all) different to its alternative(s).'
    },
    {
      'definition': 'As our collective attention to and practices in the digital remediation of scholarly materials, methods, and communications.'
    },
    {
      'definition': 'To borrow a phrase from someone else: reluctantly.'
    },
    {
      'definition': 'DH is participating in the world while being attentive to technologies and their implications for human beings.'
    },
    {
      'definition': 'By getting on with it.'
    },
    {
      'definition': 'A state of mind? A new approach? A set of methodologies? An academic subject? – I´m not able to give a proper definition, since it is what people make of it. But at least I think (and hope) the following adjectives apply to DH: inquiring – transparent – reconsidering – collaborative – multidisciplinary – receptive'
    },
    {
      'definition': 'HyperStudio explores the potential of new media technologies for the enhancement of education and research in the humanities. Our work focuses on questions about the integration of technology into humanities curricula within the broader context of scholarly inquiry and pedagogical practice.'
    },
    {
      'definition': 'Reluctantly, DH describes a collection of activities that bring together humanistic and digital approaches to learning, knowing, exploring, sharing, and publishing.'
    },
    {
      'definition': 'For me, DH is using technology to support humanistic inquiry.'
    },
    {
      'definition': 'Any humanities study that either focuses (self reflexively) on the digitality of its subject, or any field of humanities thats study is enhanced through digital tools and methods.'
    },
    {
      'definition': 'I view DH as an interdisciplinary form of research which integrates digital technology with humanities scholarship. As a librarian, I see opportunities for facilitating the use of technology and data within the diverse work of humanities scholars.'
    },
    {
      'definition': 'Humanities research that uses computational methodologies from a variety of fields.'
    },
    {
      'definition': '21st-century humanities research, teaching, and life.'
    },
    {
      'definition': 'To me DH is a methodology that allows humanists to expand access to their work, rethink their own scholarship as well as those of others, and create greater collegiality, and consequently greater findings, through collaboration.'
    },
    {
      'definition': 'The intersection of computer technology and questions about the meaning of the human condition'
    },
    {
      'definition': 'DH is using technology to pursue humanistic inquiry and using humanist methods to critique technology.'
    },
    {
      'definition': 'Digital Humanities is the practice in which people encode texts so they may be viewed through electronic platforms.'
    },
    {
      'definition': 'DH is a tool, a process, and a perspective.'
    },
    {
      'definition': 'its the humanities, but its also digital.'
    },
    {
      'definition': 'I define DH as a way for scholars to answer new questions, to share their research with the world, and to improve ones teaching and research.'
    },
    {
      'definition': 'Digital Humanities is... (1) the intersection of digital technologies and the humanities; (2) a field that creates new forms of digital research and scholarly output;  (3) a field of study that examines the impact of digital technologies on art, cultural heritage, and memory institutions.'
    },
    {
      'definition': '1 = The critical investigation of how digital technologies and media change our lives. 2 = The usage of digital technologies and media to rethink and ask new questions about what makes us human. DH = 1 + 2'
    },
    {
      'definition': 'Pursuing traditional Humanities questions in the realm of the digital, and applying digital tools and methodologies to study Humanities related topics.'
    },
    {
      'definition': 'DH is the use of digital tools and methods to transform the way we can view and access humanities research.'
    },
    {
      'definition': 'DH in a narrower sense is a discipline in its own right. It is a metadiscipline to the humanities. DH in a wider sense regards the digital transformation of the disciplines within the humanities and thus takes place within these disciplines as well.'
    },
    {
      'definition': 'Why define it? Just do it!'
    },
    {
      'definition': 'I define DH by my use of it. As I engage with DH, I am looking for ways to effectively communicate scholarly knowledge with a broader audience; not just as a way of outreach or dissemination, but as laying the foundation for the democratization of knowledge and incorporation of multivocality into scholarly work. Thus, a set of tools for effective engagement.'
    },
    {
      'definition': 'Through my research and practice, I define DH as both the use and study of digital technologies.'
    },
    {
      'definition': 'DH merges the practices, styles and systems from ‘traditional’ humanities fields (e.g. history, philosophy, english, etc.) with the computer programmes/tools (such as data/text mining, data visualisation, etc.) to a) answer research questions; b) challenge existing theories; or c) create new/novel questions not before considered, ultimately to bring a new approach to research.'
    },
    {
      'definition': 'I mostly try not to, but if pressed, Id say that DH covers both digital methods applied to the humanities and the application of methods and theories from the humanities to the digital.'
    },
    {
      'definition': 'Materials relating to heritage which are created or transcribed into a digital media. Includes material which is directly born from the digital platform, but is also surrogate from other analogue forms.'
    },
    {
      'definition': 'DH involves the creation and application of new tools, technologies, and methodologies within the humanities, as well as theorising about their effects.'
    },
    {
      'definition': 'H w/ more or less D'
    },
    {
      'definition': 'I define it pretty broadly--using digital technology to increase understanding of humanities subjects.'
    },
    {
      'definition': 'DH is to take advantage of digital resources to improve our work as philologists.'
    },
    {
      'definition': 'From Methods to Made (Digital Manifesto)'
    },
    {
      'definition': 'I stick by my 2011 definition: The Digital Humanities is both an evolving field with a discernable set of academic lineages, practices, and methodologies and a vague umbrella term used to describe the application of digital technology to traditional humanistic inquiry. Ultimately, what sets DH apart from many other humanities fields is its methodological commitment to building things as a way of knowing.'
    },
    {
      'definition': 'I refer them to the What is Digital Humanities website. http://whatisdigitalhumanities.com/'
    },
    {
      'definition': 'Anything digital and humanistic'
    },
    {
      'definition': 'I try not to.'
    },
    {
      'definition': 'It is a field of reasearch in humanities that involves digital technology as a very important part of its methodology, since it allows creative and innovative uses.'
    },
    {
      'definition': 'Technically I am an anthropologist, not a humanist. But I would say to me, Digital Anthropology (if that is even a thing!) is the use of digital methods to study culture and/or the use of anthropological methods to study digital cultures. My favorite part of DH? Data visualization, social media network analysis (Instagram and Twitter) and educational technology.'
    },
    {
      'definition': 'Technology aiding humanities research, and humanities research needs driving technological development.'
    },
    {
      'definition': 'Integrally connected, interdisciplinary.'
    },
    {
      'definition': 'New methods, new tools, new networks to do humanities research.'
    },
    {
      'definition': 'I define DH as an interdisciplinary course of research into the intersections between science and the humanities.'
    },
    {
      'definition': 'I know its a huge field, expanding in many directions. But for my purposes, its mainly doing corpus linguistics work with literary texts, and Im just beginning to play in this field.'
    },
    {
      'definition': 'It is an emergent field in the Humanities that utilizes computing technology as the medium for research, teaching, and service.'
    },
    {
      'definition': 'dh puts digital tools to work in order to gain new insights into humanistic subjects. this takes many forms and changes the way we work.'
    },
    {
      'definition': 'Erm, still working on that one!'
    },
    {
      'definition': 'definition still percolating...'
    },
    {
      'definition': 'Digital Humanities is the link between digital tools and the humanities subjects. For me digital humanities is a digital space that allows people to collaborate, learn and teach traditional humanities subjects.'
    },
    {
      'definition': 'An intersection of computer science techniques with humanities investigation.'
    },
    {
      'definition': 'Digital Humanities is the interaction between Humanities and Technology, in the fields of research and teaching.'
    },
    {
      'definition': 'digital humanities are an interdisciplinary field working on the relations between humanities and digital technology'
    },
    {
      'definition': 'The attempt to create smarter machines and to teach people how to be smarter than the intelligent machines we create'
    },
    {
      'definition': 'The experience, communication, curation, and construction of narratives through digital medium.'
    },
    {
      'definition': 'Como entrecruzamiento de la informática, las nuevas tecnologías y la ontología, en lo que a mí me interesa, filológica.'
    },
    {
      'definition': 'The application of computational technologies and digital methodologies to research in the humanities: the application of humanities methodologies to the study of digital phenomena.'
    },
    {
      'definition': 'Any academic, archival, pedagogical, or project-based work that involves using, producing, and disseminating technology in the Humanities.'
    },
    {
      'definition': 'Digital Humanities an interdiscipline where computing and the disciplines of the humanities meet. The main objective is tripartite: GIVE NEW ANSWERS to old research questions using new resources, REVISIT its postulates under the light of the new methodologies, DEVELOP new forms of sharing knowledge.'
    },
    {
      'definition': 'Investigating humanities questions using digital technology.'
    },
    {
      'definition': 'DH is the study, exploration, and preservation of, as well as education about human cultures, events, languages, people, and material production in the past and present in a digital environment through the creation and use of dynamic tools to visualize and analyze data, share and annotate primary sources, discuss and publish findings, collaborate on research and teaching, for scholars, students, and the general public.'
    },
    {
      'definition': 'The creative application of digital technology to humanities questions and data'
    }
  ];

  getDef() {

    // shuffle
    let j, x, i;
    for (i = this.definitions.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = this.definitions[i - 1];
      this.definitions[i - 1] = this.definitions[j];
      this.definitions[j] = x;
    }

    return this.definitions;
  }
}
