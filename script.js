//************Job Roles************

let jobRolesElement = document.getElementById('jobRoles');

let allJobRoles = ['Web Developer', 'YouTuber', 'Freelancer'];
let count = 0;

setInterval(function(){
    if (count === 2) {
        jobRolesElement.textContent = allJobRoles[count];
        count = 0;
    }
    else{
        jobRolesElement.textContent = allJobRoles[count];
        count += 1;
    }
},3000)

//************Social Media Details************

let followerElement = document.getElementById('followers');
let accountIdElement = document.getElementById('accountId');
let postElement = document.getElementById('post');
let friendsElement = document.getElementById('friends');
let mediaElement = document.getElementById('media');

let accountDetailsElement = document.getElementById('accountDetails');

let facebook = document.getElementById('facebook');
let twitter = document.getElementById('twitter');
let youtube = document.getElementById('youtube');
let instagram = document.getElementById('instagram');
let linkedin = document.getElementById('linkedin');
let telegram = document.getElementById('telegram');
let accountCreate = document.getElementById('accountCreate');
let totalViews = document.getElementById('totalViews');

facebook.addEventListener('mousemove',function(){
    mediaElement.textContent = 'Facebook';
    accountIdElement.textContent = 'Account Name : Srikanth Yadav';
    followerElement.textContent = 'Followers : 70';
    postElement.textContent = "Post : 13";
    friendsElement.textContent = 'Friends : 243'
    accountCreate.textContent = 'Account Created : Oct 10, 2015';
    mediaElement.classList.add('account-bold')
    accountDetailsElement.classList.add('social-media-details-box');
    //followerElement.classList.add('social-media-details');
})

facebook.addEventListener('mouseleave',function(){
    mediaElement.textContent = '';
    postElement.textContent = "";
    friendsElement.textContent = ''
    accountIdElement.textContent = '';
    followerElement.textContent = '';
    accountCreate.textContent = '';
    mediaElement.classList.toggle('account-bold')
    accountDetailsElement.classList.toggle('social-media-details-box');
    //followerElement.classList.toggle('social-media-details');
})

twitter.addEventListener('mousemove',function(){
    mediaElement.textContent = 'Twitter';
    accountIdElement.textContent = 'Account Name : Srikanth Yadav';
    followerElement.textContent = 'Followers : 0';
    postElement.textContent = "Post : 0";
    accountCreate.textContent = 'Account Created : No Account';
    mediaElement.classList.add('account-bold')
    accountDetailsElement.classList.add('social-media-details-box');

})

twitter.addEventListener('mouseleave',function(){
    mediaElement.textContent = '';
    accountIdElement.textContent = '';
    followerElement.textContent = '';
    postElement.textContent = "";
    accountCreate.textContent = '';
    mediaElement.classList.toggle('account-bold')
    accountDetailsElement.classList.toggle('social-media-details-box');

})


youtube.addEventListener('mousemove',function(){
    mediaElement.textContent = 'YouTube';
    accountIdElement.textContent = 'Channel Name : Technical Srikanth';
    followerElement.textContent = 'Subscriber : 8000';
    postElement.textContent = "Videos : 169";
    totalViews.textContent = 'Total Views : 827,090';
    accountCreate.textContent = 'Channel Created : Nov 21, 2019';
    mediaElement.classList.add('account-bold')
    accountDetailsElement.classList.add('social-media-details-box');

})

youtube.addEventListener('mouseleave',function(){
    mediaElement.textContent = '';
    accountIdElement.textContent = '';
    followerElement.textContent = '';
    postElement.textContent = "";
    totalViews.textContent = '';
    accountCreate.textContent = '';
    mediaElement.classList.toggle('account-bold')
    accountDetailsElement.classList.toggle('social-media-details-box');

})


instagram.addEventListener('mousemove',function(){
    mediaElement.textContent = 'Instagram';
    accountIdElement.textContent = 'Account Name : srikanth_4441';
    followerElement.textContent = 'Followers : 140';
    postElement.textContent = "Post : 30";
    accountCreate.textContent = 'Account Created : Feb 20, 2019';
    mediaElement.classList.add('account-bold')
    accountDetailsElement.classList.add('social-media-details-box');

})

instagram.addEventListener('mouseleave',function(){
    mediaElement.textContent = '';
    accountIdElement.textContent = '';
    followerElement.textContent = '';
    postElement.textContent = "";
    accountCreate.textContent = '';
    mediaElement.classList.toggle('account-bold')
    accountDetailsElement.classList.toggle('social-media-details-box');

})


linkedin.addEventListener('mousemove',function(){
    mediaElement.textContent = 'LinkedIn';
    accountIdElement.textContent = 'Account Name : Kongala Srikanth';
    followerElement.textContent = 'Followers : 14';
    postElement.textContent = "Post : 47";
    accountCreate.textContent = 'Account Created : Dec 01, 2019';
    mediaElement.classList.add('account-bold')
    accountDetailsElement.classList.add('social-media-details-box');

})

linkedin.addEventListener('mouseleave',function(){
    mediaElement.textContent = '';
    accountIdElement.textContent = '';
    followerElement.textContent = '';
    postElement.textContent = "";
    accountCreate.textContent = '';
    mediaElement.classList.toggle('account-bold')
    accountDetailsElement.classList.toggle('social-media-details-box');

})


telegram.addEventListener('mousemove',function(){
    mediaElement.textContent = 'Telegram';
    accountIdElement.textContent = 'Channel Name : Kongala Srikanth';
    followerElement.textContent = 'Subscribers : 6';
    postElement.textContent = "Post : 3";
    accountCreate.textContent = 'Channel Created : July 15, 2020';
    mediaElement.classList.add('account-bold')
    accountDetailsElement.classList.add('social-media-details-box');

})

telegram.addEventListener('mouseleave',function(){
    mediaElement.textContent = '';
    accountIdElement.textContent = '';
    followerElement.textContent = '';
    postElement.textContent = "";
    accountCreate.textContent = '';
    mediaElement.classList.toggle('account-bold')
    accountDetailsElement.classList.toggle('social-media-details-box');

})

//************Dark Mode************

let darkModeElement = document.getElementById('darkMode');
let darkBgElement = document.getElementById('darkBg');
let homeButton = document.getElementById('homeButton');
let aboutButton = document.getElementById('aboutButton');
let skillsButton = document.getElementById('skillsButton');
let projectButton = document.getElementById('projectButton');
let contactButton = document.getElementById('contactButton');
let followButton = document.getElementById('followButton');
let aboutSection = document.getElementById('aboutSection');
let storyBg = document.getElementById('storyBg');
let storyText = document.getElementById('storyText');
let skillSections =document.getElementById('skillSections');
let contactCard = document.getElementById('contactCard');
let followMeCard = document.getElementById('followMeCard');
let footerElement = document.getElementById('footerElement');

let homeFooter = document.getElementById('homeFooter');
let aboutFooter = document.getElementById('aboutFooter');
let skillsFooter = document.getElementById('skillsFooter');
let projectsFooter = document.getElementById('projectsFooter');
let contactFooter = document.getElementById('contactFooter');
let websiteLink = document.getElementById('websiteLink');

let facebookFooter = document.getElementById('facebookFooter');
let youtubeFooter = document.getElementById('youtubeFooter');
let instagramFooter = document.getElementById('instagramFooter');
let linkedinFooter = document.getElementById('linkedinFooter');


darkModeElement.addEventListener('click', function(){
    darkModeElement.classList.toggle('text-white');
    darkBgElement.classList.toggle('bg-dark');
    homeButton.classList.toggle('text-white');
    aboutButton.classList.toggle('text-white');
    skillsButton.classList.toggle('text-white');
    projectButton.classList.toggle('text-white');
    contactButton.classList.toggle('text-white');
    followButton.classList.toggle('text-white');


    aboutSection.classList.toggle('black-card');
    storyBg.classList.toggle('bg-dark');
    storyText.classList.toggle('text-dark')
    skillSections.classList.toggle('black-card');
    contactCard.classList.toggle('black-card');
    followMeCard.classList.toggle('black-card');
    footerElement.classList.toggle('footer-card');

    homeFooter.classList.toggle('text-white');
    aboutFooter.classList.toggle('text-white');
    skillsFooter.classList.toggle('text-white');
    projectsFooter.classList.toggle('text-white');
    contactFooter.classList.toggle('text-white');
    websiteLink.classList.toggle('text-white');

    facebookFooter.classList.toggle('text-white');
    youtubeFooter.classList.toggle('text-white');
    instagramFooter.classList.toggle('text-white');
    linkedinFooter.classList.toggle('text-white');

})