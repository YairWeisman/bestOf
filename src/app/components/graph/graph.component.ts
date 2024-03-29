import {Component, OnInit } from '@angular/core';
import { graphModule } from './graph.script';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity:0}),
        animate(1000, style({opacity:1})),

      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity:0}))
      ])
    ])
  ],
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  constructor() {
    this.updateYear = this.updateYear.bind(this);
    this.resetYear = this.resetYear.bind(this);
    this.notInRange = this.notInRange.bind(this);
  }
  genre = '';
  showMore = false;
  about = '';
  yearSelected = '';
  genresInfo = {
    'Pop': 'Pop music is a genre of popular music that originated in its modern form in the United States and United Kingdom during the mid-1950s.The terms popular music and pop music are often used interchangeably though they differ. Pop song usually have a good rhythm, a catchy melody, and are easy to remember and sing along to. They usually have a chorus that repeats several times and two or more verses. Most pop songs are between two and five minutes long, and the lyrics are usually about the joys and problems of love and relationships. ',
    'Rock': 'Rock music is a genre of popular music that originated as rock and roll in the United States in the early 1950s, and developed into a range of different styles in the 1960s and later, particularly in the United Kingdom and the United States.The sound of rock is traditionally centered on the amplified electric guitar, which emerged in its modern form in the 1950s with the popularization of rock and roll, and was influenced by the sounds of electric blues guitarists',
    'Jazz': 'Jazz is a music genre that originated in African American communities of New Orleans, United States, in the late 19th and early 20th centuries, and developed from roots in blues and ragtime. Since the 1920s Jazz Age, jazz has become recognized as a major form of musical expression. Jazz is characterized by swing and blue notes, call and response vocals, polyrhythms and improvisation. Jazz has roots in West African cultural and musical expression, and in African-American music traditions including blues and ragtime, as well as European military band music.',
    'Hip Hop' : 'Hip hop music, also called rap music, is a music genre developed in the United States by inner-city African Americans in the 1970s which consists of a stylized rhythmic music that commonly accompanies rapping, a rhythmic and rhyming speech that is chanted. Hip hop as music and culture formed during the 1970s when block parties became increasingly popular in New York City, particularly among African American youth residing in the Bronx. At block parties DJs played percussive breaks of popular songs using two turntables to extend the breaks.',
    'R&B' : 'Rhythm and blues, often abbreviated as R&B or RnB, is a genre of popular African-American music that originated in the 1940s. The term was originally used by record companies to describe recordings marketed predominantly to urban African Americans, at a time when urbane, rocking, jazz based music with a heavy, insistent beat was becoming more popular. R&B lyrical themes often encapsulate the African-American experience of pain and the quest for freedom and joy.',
    'Electronic' : 'Electronic music is music that employs electronic musical instruments, digital instruments and circuitry-based music technology. An electronic musician being a musician who composes and/or performs such music. In general, a distinction can be made between sound produced using electromechanical means, such as violins and drums, and that produced using electronic technologyץ Electronically produced music became prevalent in the popular domain by the 1990s, because of the advent of affordable music technology',
    'Country' : 'Country music is a musical genre that originated in the Southern United States in the 1920s. It takes its roots from genres such as folk music and blues. Country music often consists of ballads and dance tunes with generally simple forms and harmonies accompanied by mostly string instruments such as banjos, electric and acoustic guitars, steel guitars.',
    'Classical': 'Classical music is art music produced or rooted in the traditions of Western music, including both liturgical. traditional genre of music conforming to an established form and appealing to critical interest and developed musical taste',
    'Indie' : 'Independent music (often shortened to indie music or indie) is music produced independently from major commercial record labels or their subsidiaries, a process that may include an autonomous, do-it-yourself approach to recording and publishing. The term indie is sometimes also used to describe a genre (such as indie rock and indie pop); as a genre term, indie may include music that is not independently produced, and most independent music artists do not fall into a single, defined musical style or genre, and usually create music that can be categorized into other genres.',
    'Folk' : 'Folk music includes both traditional music and the genre that evolved from it during the 20th century folk revival. The term originated in the 19th century, but is often applied to music older than that. Some types of folk music are also called world music.In folk music, a tune is a short instrumental piece, a melody, often with repeating sections, and usually played a number of times. ',
    'Metal' : 'Heavy metal (or simply metal) is a genre of rock music that developed in the late 1960s and early 1970s, largely in the United Kingdom and the United States. With roots in blues rock and psychedelic/acid rock, the bands that created heavy metal developed a thick, massive sound, characterized by highly amplified distortion, extended guitar solos, emphatic beats, and overall loudness. Heavy metal lyrics and performance styles are sometimes associated with aggression and machismo.',
    'Reggea' : 'Reggae is a music genre that originated in Jamaica in the late 1960s. The term also denotes the modern popular music of Jamaica and its diaspora. the term reggae more properly denotes a particular music style that was strongly influenced by traditional mento as well as American jazz and rhythm and blues, especially the New Orleans R&B. Stylistically, reggae incorporates some of the musical elements of rhythm and blues, jazz, mento',
    'Punk' : 'Punk rock, or simply punk is a rock music genre that developed in the early to mid-1970s in the United States, United Kingdom, and Australia. Rooted in 1960s garage rock and other forms of what is now known as proto-punk music, punk rock bands rejected perceived excesses of mainstream 1970s rock. Punk bands typically produced short or fast-paced songs, with hard-edged melodies and singing styles, stripped-down instrumentation, and often political, anti-establishment lyrics. ',
    'Funk' : 'Funk is a music genre that originated in the mid-1960s when African American musicians created a rhythmic, danceable new form of music through a mixture of soul music, jazz, and rhythm and blues (R&B). Funk de-emphasizes melody and chord progressions used in other related genres and brings a strong rhythmic groove of a bass line played by an electric bassist and a drum part played by a drummer to the foreground. ',
    'Blues' : 'Blues is a genre and musical form originated by African Americans in the Deep South of the United States around the end of the 19th century. The genre developed from roots in African musical traditions, African-American work songs, spirituals, and folk music. Blues incorporated spirituals, work songs, field hollers, shouts, chants, and rhymed simple narrative ballads. The blues form, ubiquitous in jazz, rhythm and blues and rock and roll, is characterized by the call-and-response pattern, the blues scale and specific chord progressions, of which the twelve-bar blues is the most common.',
  };
  genreOfYear = {'1941': 'Jazz', '1942': 'Jazz', '1943': 'Jazz', '1944': 'Pop', '1945': 'Jazz', '1946': 'Pop', '1947': 'Pop', '1948': 'Pop', '1949': 'Pop', '1950': 'Pop', '1951': 'Pop', '1952': 'Pop', '1953': 'Pop', '1954': 'Pop', '1955': 'Pop', '1956': 'Pop', '1957': 'Pop', '1958': 'Rock', '1959': 'Rock', '1960': 'Rock', '1961': 'Pop', '1962': 'Pop', '1963': 'Pop', '1964': 'Pop', '1965': 'Pop', '1966': 'Rock', '1967': 'Pop', '1968': 'Pop', '1969': 'Pop', '1970': 'Pop', '1971': 'Pop', '1972': 'Pop', '1973': 'Pop', '1974': 'Pop', '1975': 'Pop', '1976': 'Pop', '1977': 'Pop', '1978': 'Pop', '1979': 'Pop', '1980': 'Pop', '1981': 'Pop', '1982': 'Pop', '1983': 'Pop', '1984': 'Pop', '1985': 'Pop', '1986': 'Pop', '1987': 'Pop', '1988': 'Pop', '1989': 'Pop', '1990': 'Pop', '1991': 'Pop', '1992': 'Pop', '1993': 'Pop', '1994': 'Pop', '1995': 'Rock', '1996': 'Rock', '1997': 'Pop', '1998': 'Pop', '1999': 'Pop', '2000': 'Pop', '2001': 'R&B', '2002': 'Hip Hop', '2003': 'Hip Hop', '2004': 'Hip Hop', '2005': 'Hip Hop', '2006': 'Hip Hop', '2007': 'Hip Hop', '2008': 'R&B', '2009': 'Pop', '2010': 'Hip Hop', '2011': 'Hip Hop', '2012': 'Pop', '2013': 'Pop', '2014': 'Pop', '2015': 'Pop', '2016': 'Hip Hop'};
  ngOnInit() {
    graphModule(this.updateYear, this.resetYear, this.notInRange);
  }
  learn() {
    this.showMore = true;
    this.about = this.genresInfo[this.genre];
  }
  updateYear(year) {
    this.yearSelected = year;
    this.genre = this.genreOfYear[this.yearSelected];
  }
  resetYear() {
    this.yearSelected = '';
  }
  notInRange() {
    alert('Please select a year in the range.');
    this.yearSelected = '';
  }
}
