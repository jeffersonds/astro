import fs from 'fs';
import path from 'path';

const NUM_POSTS = 10;
const POSTS_DIR = './src/content/posts.generated';
const EXT = '.md';

(async function writePosts() {
	const postsDir = process.argv[2] ?? POSTS_DIR;
	const numPosts = Number(process.argv[3]) ?? NUM_POSTS;
	const ext = process.argv[4] ?? EXT;
	if (fs.existsSync(postsDir)) {
		const files = await fs.promises.readdir(postsDir);
		await Promise.all(files.map((file) => fs.promises.unlink(path.join(postsDir, file))));
	} else {
		await fs.promises.mkdir(postsDir, { recursive: true });
	}

	await Promise.all(
		Array.from(Array(numPosts).keys()).map((idx) => {
			return fs.promises.writeFile(
				`${postsDir}/post-${idx}${ext.startsWith('.') ? ext : `.${ext}`}`,
				toMdContents(idx)
			);
		})
	);

	console.log(`${numPosts} ${ext} posts written to ${JSON.stringify(postsDir)} 🚀`);
})();

const toMdContents = (idx) => `---
title: Example ${idx}
---

# Post ${idx}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur interdum quam vitae est dapibus auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus id purus vel ante interdum eleifend non sed magna. Nullam aliquet metus eget nunc pretium, ac malesuada elit ultricies. Quisque fermentum tellus sed risus tristique tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas eleifend odio sed tortor rhoncus venenatis. Maecenas dignissim convallis sem et sagittis. Aliquam facilisis auctor consectetur. Morbi vulputate fermentum lobortis. Aenean luctus risus erat, sit amet imperdiet lectus tempor et.

Aliquam erat volutpat. Vivamus sodales auctor hendrerit. Proin sollicitudin, neque id volutpat ultrices, urna tellus maximus quam, at placerat diam quam a nisl. In commodo, nibh quis rhoncus lacinia, felis nisi egestas tortor, dictum mollis magna massa at tortor. Cras tempus eleifend turpis, nec suscipit velit egestas a. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse nec nulla accumsan, sollicitudin dolor non, varius ipsum. Sed vel congue felis, sit amet bibendum neque. Pellentesque ut diam mollis augue auctor venenatis. Sed vitae aliquet lacus. Proin rutrum eget urna in vehicula. Vestibulum malesuada quis velit ac imperdiet. Donec interdum posuere nisl in auctor. Integer auctor pretium posuere.

Aenean tincidunt vitae augue id lacinia. Fusce a lorem accumsan, luctus magna non, fermentum arcu. Quisque mattis nibh ut ultrices vehicula. Fusce at porta mauris, eu sollicitudin augue. Curabitur tempor ante vulputate posuere interdum. Nam volutpat odio in blandit dapibus. Aliquam sit amet rutrum tortor.

Nulla eu odio nisl. Quisque malesuada arcu quis velit fermentum condimentum. Suspendisse potenti. Nullam non egestas sem. Sed et mi pharetra, ornare nunc ultricies, cursus est. Cras dignissim nisl eleifend nisl condimentum placerat. Vivamus tristique mattis vestibulum.

Maecenas at convallis dui. Pellentesque ac convallis libero. Mauris elementum arcu in quam pulvinar, a tincidunt dolor volutpat. Donec posuere eros ac nunc aliquam, non iaculis purus faucibus. Maecenas non lacus eu elit hendrerit fringilla eget vitae justo. Donec non lorem eu libero placerat volutpat. Vivamus euismod tristique lacus quis tincidunt.

Morbi a ligula eu odio dictum pharetra. Vestibulum a leo sit amet urna sodales facilisis posuere pretium lorem. Duis consectetur elementum sodales. Ut id libero quis dui laoreet faucibus eget ac felis. Suspendisse eu augue facilisis, consequat ex at, malesuada justo. Fusce tempor convallis orci a tristique. Pellentesque dapibus magna in sapien congue pharetra. Suspendisse potenti. Fusce in tortor justo. In hac habitasse platea dictumst. Pellentesque ligula odio, auctor vel consectetur quis, egestas a lectus. Sed arcu sapien, venenatis vitae nunc vitae, feugiat consequat elit.

Fusce bibendum odio tellus, ac consequat magna fringilla nec. Donec sed purus at magna pulvinar iaculis ac at nulla. Cras placerat, velit quis suscipit malesuada, eros dui ultrices sapien, sodales imperdiet enim ipsum vitae nisi. Mauris malesuada pretium nibh et luctus. Suspendisse potenti. In ante nibh, euismod at diam in, dapibus facilisis nunc. Suspendisse eleifend mollis dolor sit amet tristique. Nulla mattis tempor urna, nec pellentesque ante feugiat ut. Curabitur eleifend purus sed justo facilisis lacinia. Etiam maximus magna rhoncus quam tincidunt sollicitudin. Proin rhoncus metus lacus, non euismod mi gravida ac. Nam ac ipsum nec ante ultrices tempus ac mollis erat. Quisque ac tortor dolor. Integer eros mi, porttitor at rutrum ut, cursus sit amet ex. Pellentesque sed tortor vitae lorem malesuada gravida. Pellentesque bibendum ex nunc, non cursus lorem viverra gravida.

Integer lobortis erat quis dolor maximus porta. Sed ipsum est, maximus sit amet hendrerit ac, euismod quis nisi. Sed tincidunt, nisi sit amet varius tempus, turpis nisi sodales ante, sed ultricies urna neque vel purus. Maecenas sed laoreet tortor. Pellentesque enim massa, cursus in mauris vitae, facilisis egestas nisi. Mauris non ultrices purus, nec cursus diam. Proin eget ullamcorper augue. Pellentesque vehicula, sem vel dapibus tempus, neque tortor euismod libero, sed euismod diam enim id sapien. Sed mauris tellus, pretium eu ornare vitae, rhoncus at quam. Donec luctus mollis justo id rutrum. Aenean efficitur arcu nisi, non dignissim massa auctor et. In egestas lobortis nisi ac pharetra. Nam ultricies ipsum ut dui porta, sed commodo arcu vestibulum. Sed in felis molestie ante sodales auctor.

Praesent ac augue dui. Sed venenatis sit amet quam non rutrum. Vestibulum vitae tempor mi. Cras id luctus sapien, consectetur euismod magna. Nunc quis pellentesque sem, ut suscipit justo. Aliquam dignissim risus ante, vitae luctus enim vestibulum id. In hac habitasse platea dictumst. Nam rhoncus ante sed commodo porta. Ut lectus eros, porta sit amet velit vitae, elementum dignissim nulla. Cras nec scelerisque nulla. Quisque in diam eleifend, congue nulla eu, vestibulum magna. Sed vel purus elementum, mattis nunc id, mollis arcu. Pellentesque in pellentesque ipsum, non condimentum augue. Aenean tincidunt dui ut purus aliquet pretium. Integer vitae velit aliquet, tincidunt urna sed, bibendum lorem. Vivamus sit amet sapien ut sapien rhoncus fringilla vel a mi.

Praesent dignissim, arcu vel sollicitudin dictum, augue velit pretium ante, sit amet egestas velit lectus et tortor. In egestas ullamcorper risus, non vestibulum diam ultricies eu. Praesent a ex ac nisi consequat rhoncus. Fusce feugiat feugiat libero, vel lobortis mauris faucibus elementum. Mauris vitae luctus sapien. Etiam id pretium metus, in lacinia eros. Morbi et dictum risus. Morbi fringilla lorem ut elit fringilla blandit.

Nullam eu nibh ipsum. Curabitur aliquet varius ante, a pretium mauris dictum in. Integer nibh arcu, tristique ac sagittis nec, maximus et ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin blandit nec mi vel hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi consequat blandit orci, sed placerat sem fermentum sit amet. Quisque eu iaculis nisl. Suspendisse quam mauris, semper vel eleifend vitae, mollis in arcu.

Aenean porttitor blandit orci id bibendum. Nunc sit amet ligula bibendum, congue urna fringilla, dictum purus. Pellentesque blandit, nibh id laoreet placerat, mauris dui semper mi, id tincidunt metus massa nec nisi. Suspendisse potenti. Phasellus ut risus velit. Curabitur porttitor metus nunc, in malesuada justo gravida sit amet. Cras auctor justo magna, ut eleifend turpis dictum id. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque ut augue ac velit imperdiet suscipit non at massa.

Suspendisse euismod ornare quam id varius. Etiam ac velit id quam accumsan imperdiet sit amet eu nibh. Ut nec massa ultricies enim iaculis feugiat. Phasellus vehicula massa id ligula dapibus, sit amet viverra justo volutpat. Sed nunc est, efficitur et purus id, lacinia pellentesque metus. Pellentesque mi quam, maximus a blandit nec, mollis eget leo. Nulla sit amet elementum augue. Aenean id luctus nisl. Etiam non ante id augue dignissim suscipit in id quam. Quisque non consequat diam, eget condimentum turpis. Donec fringilla metus eget condimentum congue. Pellentesque aliquet blandit posuere. In bibendum ultrices ex a ornare. Donec quis efficitur metus. In commodo sollicitudin turpis et efficitur. Ut ac viverra nunc, sit amet varius sapien.

In sit amet felis et diam vehicula placerat. Nullam finibus lorem libero, et pretium eros consectetur euismod. In fringilla semper diam et hendrerit. Phasellus id erat at justo imperdiet aliquet. Donec dignissim auctor nunc, et ultrices ex rutrum nec. Aliquam ut cursus leo. Suspendisse semper velit ac lorem aliquet fermentum. Suspendisse congue mi et ultrices bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ac neque et enim facilisis posuere volutpat a augue. Vivamus feugiat fermentum rhoncus.

Proin ultricies turpis non mauris finibus elementum. Cras scelerisque pretium justo non efficitur. Curabitur at risus ut velit ullamcorper fringilla congue in nulla. Nunc laoreet lacinia purus at lobortis. Sed vulputate ex non cursus accumsan. Morbi risus elit, porttitor ac hendrerit sed, commodo suscipit nisi. Vivamus vestibulum ex sapien, sagittis blandit velit fermentum et.

Suspendisse ut ullamcorper ex, a hendrerit elit. Vivamus gravida tempor efficitur. Ut lobortis neque a mollis efficitur. Donec sit amet arcu quis massa fringilla consequat. Duis vitae nisl laoreet, suscipit tellus nec, malesuada sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus in sollicitudin nisi. Fusce id sapien ac nunc sagittis lobortis tempor auctor eros. Nunc lacinia enim vitae massa lacinia, suscipit facilisis turpis tempus. Integer nec mollis ex. Pellentesque magna nisl, dignissim in mi quis, malesuada elementum nibh. Duis consectetur erat quis interdum ornare. Phasellus lorem felis, aliquam a nunc at, luctus faucibus odio. In hac habitasse platea dictumst.

Vestibulum sit amet lorem arcu. Integer sed nisl ut turpis dapibus mollis sit amet sed turpis. Donec massa dolor, blandit at lacinia eu, ultricies eu turpis. Sed mollis non diam non consectetur. Morbi suscipit metus at orci sagittis ultricies. Mauris pulvinar maximus ex vitae convallis. Ut imperdiet vehicula mi ut imperdiet. Aliquam et dui at turpis volutpat condimentum. Morbi laoreet scelerisque leo, non tristique ante convallis vulputate. Nam et lorem enim. Cras cursus sodales nisi, nec facilisis felis feugiat sit amet. Aenean consequat pellentesque magna id venenatis. Nunc sed quam consequat, vestibulum diam nec, dignissim justo. Duis vulputate nibh sit amet tortor lobortis iaculis. Curabitur pellentesque dui sapien, nec varius libero hendrerit vel.

Curabitur quis mi ac massa hendrerit ornare id eget velit. Nulla dui lacus, hendrerit et fringilla sed, eleifend ut erat. Nunc ut fringilla ex, sit amet fringilla libero. Maecenas non ullamcorper orci. Duis posuere erat et urna rhoncus iaculis. Proin pellentesque porttitor nulla, non blandit ante semper vitae. Phasellus ut augue venenatis, tempus purus eu, efficitur massa. Etiam vel egestas tellus, ac pharetra lectus. Aliquam non commodo turpis. Quisque pharetra nunc et mauris bibendum, id vestibulum tellus fringilla. Nullam enim massa, porta id nisi at, accumsan sollicitudin elit. Morbi auctor lectus vitae orci cursus, et hendrerit odio accumsan. Pellentesque quis libero auctor, tempor dolor tempor, finibus arcu. Aliquam non cursus ex. Aliquam quis lacus ut purus pellentesque ultrices in a augue.

Morbi nunc diam, egestas sed condimentum a, interdum suscipit ligula. Morbi interdum dignissim imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris egestas, nulla nec feugiat porttitor, ex magna sodales nisl, ac volutpat tortor mauris vitae nibh. Cras cursus dignissim pretium. Nunc faucibus dui at lectus pellentesque vehicula. Maecenas tincidunt, libero quis hendrerit aliquet, tortor leo iaculis enim, sit amet ullamcorper tellus risus a orci. Donec dignissim metus in nulla eleifend molestie. Nunc at turpis et sem laoreet rutrum. Nulla facilisi. Sed luctus nisi sed egestas cursus.
`;
