// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');

  $(function () {
    var body = $('body');
    body.css('visibility', 'hidden');
    setTimeout(function () {
      body.css('visibility', 'visible');
    }, 50);
  });

}
// Place any jQuery/helper plugins in here.
/**
 * Name:    Highslide JS
 * Version: 4.1.13 (2011-10-06)
 * Config:  default +events +unobtrusive +imagemap +slideshow +positioning +transitions +viewport +thumbstrip +inline +ajax +iframe +flash +packed
 * Author:  Torstein Hønsi
 * Support: www.highslide.com/support
 * License: www.highslide.com/#license
 */
eval(function (p, a, c, k, e, d) {
    e = function (c) {
      return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
    };
    if (!''.replace(/^/, String)) {
      while (c--) {
        d[e(c)] = k[c] || e(c)
      }
      k = [function (e) {
        return d[e]
      }];
      e = function () {
        return '\\w+'
      };
      c = 1
    };
    while (c--) {
      if (k[c]) {
        p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
      }
    }
    return p
  }('q(!m){A m={18:{97:\'aK\',aZ:\'fw...\',aY:\'8G 2i fP\',bD:\'8G 2i g0 2i eR\',9Z:\'eZ 2i fc D (f)\',cq:\'f8 by <i>an ao</i>\',cr:\'f4 2i f6 an ao fg\',8Y:\'aq\',8W:\'ay\',8Z:\'ag\',92:\'am\',90:\'am (eD)\',b0:\'eY\',ab:\'al\',au:\'al 1p (aj)\',ac:\'ah\',ad:\'ah 1p (aj)\',8s:\'aq (8w 1b)\',8X:\'ay (8w 3m)\',8V:\'ag\',ae:\'1:1\',3G:\'g7 %1 fz %2\',9W:\'8G 2i 26 2R, dC aA dE 2i 3u. dF 8w dB O 1D aA 3a.\'},5c:\'K/dw/\',7R:\'dv.5q\',6h:\'dx.5q\',6W:5Z,9A:5Z,4W:15,9B:15,4d:15,6L:15,4F:cY,be:0.75,9l:M,9f:5,3Y:2,ei:3,5S:1j,bz:\'4Q 3m\',bA:1,br:M,ct:\'em://K.eh/\',cs:\'ec\',aS:M,9w:[\'a\',\'5v\'],3q:[],cE:5Z,4b:0,87:50,6J:1j,6X:M,4D:M,3U:\'60\',7W:M,46:\'1M\',9n:\'1M\',b1:I,aC:I,a7:M,4s:aw,6k:aw,5Y:M,1Z:\'ev-dV\',8i:{2X:\'<P 1W="K-2X"><6t>\'+\'<1H 1W="K-3a">\'+\'<a 21="#" 24="{m.18.8s}">\'+\'<1C>{m.18.8Y}</1C></a>\'+\'</1H>\'+\'<1H 1W="K-3L">\'+\'<a 21="#" 24="{m.18.au}">\'+\'<1C>{m.18.ab}</1C></a>\'+\'</1H>\'+\'<1H 1W="K-3p">\'+\'<a 21="#" 24="{m.18.ad}">\'+\'<1C>{m.18.ac}</1C></a>\'+\'</1H>\'+\'<1H 1W="K-1D">\'+\'<a 21="#" 24="{m.18.8X}">\'+\'<1C>{m.18.8W}</1C></a>\'+\'</1H>\'+\'<1H 1W="K-3u">\'+\'<a 21="#" 24="{m.18.8V}">\'+\'<1C>{m.18.8Z}</1C></a>\'+\'</1H>\'+\'<1H 1W="K-1a-2F">\'+\'<a 21="#" 24="{m.18.9Z}">\'+\'<1C>{m.18.ae}</1C></a>\'+\'</1H>\'+\'<1H 1W="K-26">\'+\'<a 21="#" 24="{m.18.90}" >\'+\'<1C>{m.18.92}</1C></a>\'+\'</1H>\'+\'</6t></P>\',bd:\'<P 1W="K-e2"><6t>\'+\'<1H 1W="K-3a">\'+\'<a 21="#" 24="{m.18.8s}" 2p="E m.3a(k)">\'+\'<1C>{m.18.8Y}</1C></a>\'+\'</1H>\'+\'<1H 1W="K-1D">\'+\'<a 21="#" 24="{m.18.8X}" 2p="E m.1D(k)">\'+\'<1C>{m.18.8W}</1C></a>\'+\'</1H>\'+\'<1H 1W="K-3u">\'+\'<a 21="#" 24="{m.18.8V}" 2p="E 1j">\'+\'<1C>{m.18.8Z}</1C></a>\'+\'</1H>\'+\'<1H 1W="K-26">\'+\'<a 21="#" 24="{m.18.90}" 2p="E m.26(k)">\'+\'<1C>{m.18.92}</1C></a>\'+\'</1H>\'+\'</6t></P>\'+\'<P 1W="K-19"></P>\'+\'<P 1W="K-e7"><P>\'+\'<1C 1W="K-3O" 24="{m.18.b0}"><1C></1C></1C>\'+\'</P></P>\'},64:[],a1:M,16:[],a4:[\'5Y\',\'3t\',\'46\',\'9n\',\'b1\',\'aC\',\'1Z\',\'3Y\',\'dU\',\'dM\',\'dL\',\'b3\',\'dK\',\'dI\',\'dJ\',\'b2\',\'cv\',\'a7\',\'42\',\'6l\',\'3q\',\'4b\',\'L\',\'N\',\'88\',\'6J\',\'6X\',\'4D\',\'dN\',\'dO\',\'dT\',\'2I\',\'7W\',\'4j\',\'4x\',\'3U\',\'8e\',\'a9\',\'4s\',\'6k\',\'6M\',\'9i\',\'aX\',\'2N\',\'2Q\',\'cF\',\'cD\',\'1e\'],1T:[],61:0,8g:{x:[\'bM\',\'1b\',\'4X\',\'3m\',\'bC\'],y:[\'5N\',\'Y\',\'9a\',\'4Q\',\'7E\']},7B:{},b2:{},b3:{},8e:{aG:{},29:{},aF:{}},4m:[],6u:[],4n:{},4R:[],7q:[],5a:[],7k:{},8c:{},7l:[],2t:/dP\\/4\\.0/.11(4A.6d)?8:8J((4A.6d.5G().3b(/.+(?:b9|dQ|e9|2h)[\\/: ]([\\d.]+)/)||[0,\'0\'])[1]),2h:(W.6q&&!1S.3z),4M:/ea/.11(4A.6d),6y:/eu.+b9:1\\.[0-8].+es/.11(4A.6d),$:C(1v){q(1v)E W.9Q(1v)},2o:C(2a,3j){2a[2a.V]=3j},1d:C(ba,4l,49,6c,bh){A el=W.1d(ba);q(4l)m.3A(el,4l);q(bh)m.R(el,{94:0,8H:\'1E\',9D:0});q(49)m.R(el,49);q(6c)6c.1X(el);E el},3A:C(el,4l){O(A x 2Y 4l)el[x]=4l[x];E el},R:C(el,49){O(A x 2Y 49){q(m.3R&&x==\'1z\'){q(49[x]>0.99)el.G.ew(\'5Q\');J el.G.5Q=\'bg(1z=\'+(49[x]*2w)+\')\'}J el.G[x]=49[x]}},2z:C(el,1f,3C){A 4T,51,4w;q(1F 3C!=\'7j\'||3C===I){A 2H=c5;3C={4h:2H[2],2Q:2H[3],76:2H[4]}}q(1F 3C.4h!=\'3G\')3C.4h=5Z;3C.2Q=1h[3C.2Q]||1h.bj;3C.7g=m.3A({},1f);O(A 2Z 2Y 1f){A e=1J m.fx(el,3C,2Z);4T=8J(m.8I(el,2Z))||0;51=8J(1f[2Z]);4w=2Z!=\'1z\'?\'F\':\'\';e.3E(4T,51,4w)}},8I:C(el,1f){q(el.G[1f]){E el.G[1f]}J q(W.8L){E W.8L.cK(el,I).co(1f)}J{q(1f==\'1z\')1f=\'5Q\';A 3j=el.5y[1f.2k(/\\-(\\w)/g,C(a,b){E b.bi()})];q(1f==\'5Q\')3j=3j.2k(/bg\\(1z=([0-9]+)\\)/,C(a,b){E b/2w});E 3j===\'\'?1:3j}},7S:C(){A d=W,w=1S,63=d.7a&&d.7a!=\'8v\'?d.5h:d.19,3R=m.2h&&(m.2t<9||1F bf==\'1L\');A L=3R?63.8F:(d.5h.8F||7c.ep),N=3R?63.c4:7c.eo;m.4g={L:L,N:N,5O:3R?63.5O:bf,5R:3R?63.5R:ed};E m.4g},6K:C(el){q(/5v/i.11(el.3J)){A 7N=W.2C(\'1N\');O(A i=0;i<7N.V;i++){A u=7N[i].eb;q(u&&u.2k(/^.*?#/,\'\')==el.23.2Z){el=7N[i];5m}}}A p={x:el.4V,y:el.8O};5g(el.bb){el=el.bb;p.x+=el.4V;p.y+=el.8O;q(el!=W.19&&el!=W.5h){p.x-=el.5O;p.y-=el.5R}}E p},2F:C(a,29,3E,T){q(!a)a=m.1d(\'a\',I,{1o:\'1E\'},m.2b);q(1F a.6a==\'C\')E 29;q(T==\'3D\'){O(A i=0;i<m.4R.V;i++){q(m.4R[i]&&m.4R[i].a==a){m.4R[i].bP();m.4R[i]=I;E 1j}}m.aU=M}1t{1J m.5A(a,29,3E,T);E 1j}1y(e){E M}},9u:C(a,29,3E){E m.2F(a,29,3E,\'3D\')},89:C(){E m.1d(\'P\',{1c:\'K-3D-S\',2d:m.8b(m.8i.bd)})},4p:C(el,3J,1c){A 1m=el.2C(3J);O(A i=0;i<1m.V;i++){q((1J 4Y(1c)).11(1m[i].1c)){E 1m[i]}}E I},8b:C(s){s=s.2k(/\\s/g,\' \');A 2m=/{m\\.18\\.([^}]+)\\}/g,6v=s.3b(2m),18;q(6v)O(A i=0;i<6v.V;i++){18=6v[i].2k(2m,"$1");q(1F m.18[18]!=\'1L\')s=s.2k(6v[i],m.18[18])}E s},c1:C(){A 1m=W.2C(\'a\');O(A i=0;i<1m.V;i++){A T=m.aH(1m[i]);q(T&&!1m[i].aI){(C(){A t=T;q(m.1A(m,\'ek\',{7y:1m[i],T:t})){1m[i].2p=(T==\'2R\')?C(){E m.2F(k)}:C(){E m.9u(k,{2I:t})}}})();1m[i].aI=M}}m.6p()},aH:C(el){q(el.7b==\'K\')E\'2R\';J q(el.7b==\'K-2W\')E\'2W\';J q(el.7b==\'K-1k\')E\'1k\';J q(el.7b==\'K-3x\')E\'3x\'},86:C(a){O(A i=0;i<m.5a.V;i++){q(m.5a[i][0]==a){A c=m.5a[i][1];m.5a[i][1]=c.5J(1);E c}}E I},bI:C(e){A 2a=m.6p();O(A i=0;i<2a.56.V;i++){A a=2a.56[i];q(m.43(a,\'2I\')==\'2W\'&&m.43(a,\'7W\'))m.2o(m.7q,a)}m.8k(0)},8k:C(i){q(!m.7q[i])E;A a=m.7q[i];A 6z=m.4J(m.43(a,\'88\'));q(!6z)6z=m.89();A 2W=1J m.7x(a,6z,1);2W.9z=C(){};2W.3F=C(){m.2o(m.5a,[a,6z]);m.8k(i+1)};2W.9r()},aQ:C(){A 8d=0,7n=-1,16=m.16,B,1B;O(A i=0;i<16.V;i++){B=16[i];q(B){1B=B.U.G.1B;q(1B&&1B>8d){8d=1B;7n=i}}}q(7n==-1)m.3d=-1;J 16[7n].3M()},43:C(a,6b){a.6a=a.2p;A p=a.6a?a.6a():I;a.6a=I;E(p&&1F p[6b]!=\'1L\')?p[6b]:(1F m[6b]!=\'1L\'?m[6b]:I)},7s:C(a){A 1e=m.43(a,\'1e\');q(1e)E 1e;E a.21},4J:C(1v){A 1P=m.$(1v),4q=m.8c[1v],a={};q(!1P&&!4q)E I;q(!4q){4q=1P.5J(M);4q.1v=\'\';m.8c[1v]=4q;E 1P}J{E 4q.5J(M)}},3B:C(d){q(d)m.9y.1X(d);m.9y.2d=\'\'},1u:C(B){q(!m.2v){84=M;m.2v=m.1d(\'P\',{1c:\'K-dc K-2x-D\',5r:\'\',2p:C(){q(m.1A(m,\'d3\'))m.26()}},{1n:\'1Y\',1z:0},m.2b,M);q(/(df|d2|cU|cT)/.11(4A.6d)){A 19=W.19;C 81(){m.R(m.2v,{L:19.cR+\'F\',N:19.cV+\'F\'})}81();m.2j(1S,\'3O\',81)}}m.2v.G.1o=\'\';A 84=m.2v.5r==\'\';m.2v.5r+=\'|\'+B.Q;q(84){q(m.6y&&m.aR)m.R(m.2v,{9t:\'7T(\'+m.5c+\'d0.ak)\',1z:1});J m.2z(m.2v,{1z:B.4b},m.87)}},9x:C(Q){q(!m.2v)E;q(1F Q!=\'1L\')m.2v.5r=m.2v.5r.2k(\'|\'+Q,\'\');q((1F Q!=\'1L\'&&m.2v.5r!=\'\')||(m.2q&&m.43(m.2q,\'4b\')))E;q(m.6y&&m.aR)m.2v.G.1o=\'1E\';J m.2z(m.2v,{1z:0},m.87,I,C(){m.2v.G.1o=\'1E\'})},8N:C(7z,B){A 1i=B||m.2G();B=1i;q(m.2q)E 1j;J m.1i=1i;m.4z(W,1S.3z?\'6U\':\'71\',m.68);1t{m.2q=7z;7z.2p()}1y(e){m.1i=m.2q=I}1t{q(!7z||B.3q[1]!=\'4e\')B.26()}1y(e){}E 1j},7O:C(el,2n){A B=m.2G(el);q(B)E m.8N(B.7V(2n),B);J E 1j},3a:C(el){E m.7O(el,-1)},1D:C(el){E m.7O(el,1)},68:C(e){q(!e)e=1S.2u;q(!e.2L)e.2L=e.9k;q(1F e.2L.9j!=\'1L\')E M;q(!m.1A(m,\'dz\',e))E M;A B=m.2G();A 2n=I;b6(e.dy){2c 70:q(B)B.7r();E M;2c 32:2n=2;5m;2c 34:2c 39:2c 40:2n=1;5m;2c 8:2c 33:2c 37:2c 38:2n=-1;5m;2c 27:2c 13:2n=0}q(2n!==I){q(2n!=2)m.4z(W,1S.3z?\'6U\':\'71\',m.68);q(!m.aS)E M;q(e.5n)e.5n();J e.c0=1j;q(B){q(2n==0){B.26()}J q(2n==2){q(B.1p)B.1p.cl()}J{q(B.1p)B.1p.3p();m.7O(B.Q,2n)}E 1j}}E M},du:C(14){m.2o(m.1T,m.3A(14,{22:\'22\'+m.61++}))},dt:C(1r){A 3c=1r.2N;q(1F 3c==\'7j\'){O(A i=0;i<3c.V;i++){A o={};O(A x 2Y 1r)o[x]=1r[x];o.2N=3c[i];m.2o(m.6u,o)}}J{m.2o(m.6u,1r)}},9U:C(7y,7h){A el,2m=/^K-U-([0-9]+)$/;el=7y;5g(el.23){q(el.6R!==1L)E el.6R;q(el.1v&&2m.11(el.1v))E el.1v.2k(2m,"$1");el=el.23}q(!7h){el=7y;5g(el.23){q(el.3J&&m.77(el)){O(A Q=0;Q<m.16.V;Q++){A B=m.16[Q];q(B&&B.a==el)E Q}}el=el.23}}E I},2G:C(el,7h){q(1F el==\'1L\')E m.16[m.3d]||I;q(1F el==\'3G\')E m.16[el]||I;q(1F el==\'a8\')el=m.$(el);E m.16[m.9U(el,7h)]||I},77:C(a){E(a.2p&&a.2p.cC().2k(/\\s/g,\' \').3b(/m.(dj|e)dh/))},bw:C(){O(A i=0;i<m.16.V;i++)q(m.16[i]&&m.16[i].55)m.aQ()},1A:C(6i,9K,2H){E 6i&&6i[9K]?(6i[9K](6i,2H)!==1j):M},8z:C(e){q(!e)e=1S.2u;q(e.ds>1)E M;q(!e.2L)e.2L=e.9k;A el=e.2L;5g(el.23&&!(/K-(2R|3u|3D|3O)/.11(el.1c))){el=el.23}A B=m.2G(el);q(B&&(B.62||!B.55))E M;q(B&&e.T==\'8y\'){q(e.2L.9j)E M;A 3b=el.1c.3b(/K-(2R|3u|3O)/);q(3b){m.2y={B:B,T:3b[1],1b:B.x.H,L:B.x.D,Y:B.y.H,N:B.y.D,aV:e.7A,aO:e.7F};m.2j(W,\'7D\',m.6H);q(e.5n)e.5n();q(/K-(2R|3D)-9J/.11(B.S.1c)){B.3M();m.a6=M}E 1j}J q(/K-3D/.11(el.1c)&&m.3d!=B.Q){B.3M();B.59(\'1q\')}}J q(e.T==\'c3\'){m.4z(W,\'7D\',m.6H);q(m.2y){q(m.54&&m.2y.T==\'2R\')m.2y.B.S.G.4L=m.54;A 3I=m.2y.3I;q(!3I&&!m.a6&&!/(3u|3O)/.11(m.2y.T)){q(m.1A(B,\'dr\'))B.26()}J q(3I||(!3I&&m.aU)){m.2y.B.59(\'1q\')}q(m.2y.B.3W)m.2y.B.3W.G.1o=\'1E\';q(3I)m.1A(m.2y.B,\'do\',m.2y);m.a6=1j;m.2y=I}J q(/K-2R-9J/.11(el.1c)){el.G.4L=m.54}}E 1j},6H:C(e){q(!m.2y)E M;q(!e)e=1S.2u;A a=m.2y,B=a.B;q(B.1k){q(!B.3W)B.3W=m.1d(\'P\',I,{1l:\'2l\',L:B.x.D+\'F\',N:B.y.D+\'F\',1b:B.x.cb+\'F\',Y:B.y.cb+\'F\',1B:4,9t:(m.3R?\'eB\':\'1E\'),1z:0.eU},B.U,M);q(B.3W.G.1o==\'1E\')B.3W.G.1o=\'\'}a.dX=e.7A-a.aV;a.dY=e.7F-a.aO;A 9g=1h.fG(1h.aE(a.dX,2)+1h.aE(a.dY,2));q(!a.3I)a.3I=(a.T!=\'2R\'&&9g>0)||(9g>(m.fK||5));q(a.3I&&e.7A>5&&e.7F>5){q(!m.1A(B,\'fN\',a))E 1j;q(a.T==\'3O\')B.3O(a);J{B.9m(a.1b+a.dX,a.Y+a.dY);q(a.T==\'2R\')B.S.G.4L=\'3u\'}}E 1j},aP:C(e){1t{q(!e)e=1S.2u;A 66=/fM/i.11(e.T);q(!e.2L)e.2L=e.9k;q(!e.7P)e.7P=66?e.fE:e.fD;A B=m.2G(e.2L);q(!B.55)E;q(!B||!e.7P||m.2G(e.7P,M)==B||m.2y)E;m.1A(B,66?\'ft\':\'fr\',e);O(A i=0;i<B.1T.V;i++)(C(){A o=m.$(\'22\'+B.1T[i]);q(o&&o.7d){q(66)m.R(o,{1n:\'1Y\',1o:\'\'});m.2z(o,{1z:66?o.1z:0},o.4i)}})()}1y(e){}},2j:C(el,2u,3Q){q(el==W&&2u==\'41\'){m.2o(m.7l,3Q)}1t{el.2j(2u,3Q,1j)}1y(e){1t{el.aM(\'65\'+2u,3Q);el.fy(\'65\'+2u,3Q)}1y(e){el[\'65\'+2u]=3Q}}},4z:C(el,2u,3Q){1t{el.4z(2u,3Q,1j)}1y(e){1t{el.aM(\'65\'+2u,3Q)}1y(e){el[\'65\'+2u]=I}}},7C:C(i){q(m.a1&&m.64[i]&&m.64[i]!=\'1L\'){A 1N=W.1d(\'1N\');1N.4N=C(){1N=I;m.7C(i+1)};1N.1e=m.64[i]}},c2:C(3G){q(3G&&1F 3G!=\'7j\')m.9f=3G;A 2a=m.6p();O(A i=0;i<2a.4Z.V&&i<m.9f;i++){m.2o(m.64,m.7s(2a.4Z[i]))}q(m.1Z)1J m.6r(m.1Z,C(){m.7C(0)});J m.7C(0);q(m.6h)A 5q=m.1d(\'1N\',{1e:m.5c+m.6h})},7m:C(){q(!m.2b){m.3Z=m.2h&&m.2t<7;m.3R=m.2h&&m.2t<9;m.7S();m.cf=m.3Z&&85.g5==\'g4:\';O(A x 2Y m.7o){q(1F m[x]!=\'1L\')m.18[x]=m[x];J q(1F m.18[x]==\'1L\'&&1F m.7o[x]!=\'1L\')m.18[x]=m.7o[x]}m.2b=m.1d(\'P\',{1c:\'K-2b\'},{1l:\'2l\',1b:0,Y:0,L:\'2w%\',1B:m.4F,9S:\'aK\'},W.19,M);m.2r=m.1d(\'a\',{1c:\'K-2r\',24:m.18.aY,2d:m.18.aZ,21:\'bt:;\'},{1l:\'2l\',Y:\'-4v\',1z:m.be,1B:1},m.2b);m.9y=m.1d(\'P\',I,{1o:\'1E\'},m.2b);m.2x=m.1d(\'P\',{1c:\'K-2x K-2x-D\'},{1n:(m.4M&&m.2t<73)?\'1Y\':\'1q\'},m.2b,1);m.3w=m.1d(\'P\',I,{aJ:\'bc\',g9:\'ga\'},I,M);1h.g2=C(t,b,c,d){E c*t/d+b};1h.bj=C(t,b,c,d){E c*(t/=d)*t+b};1h.8S=C(t,b,c,d){E-c*(t/=d)*(t-2)+b};m.cO=m.3Z;m.cQ=((1S.3z&&m.2t<9)||4A.av==\'at\'||(m.3Z&&m.2t<5.5));m.1A(k,\'fU\')}},41:C(){q(m.9F)E;m.9F=M;O(A i=0;i<m.7l.V;i++)m.7l[i]()},95:C(){A el,1m,6q=[],4Z=[],56=[],3i={},2m;O(A i=0;i<m.9w.V;i++){1m=W.2C(m.9w[i]);O(A j=0;j<1m.V;j++){el=1m[j];2m=m.77(el);q(2m){m.2o(6q,el);q(2m[0]==\'m.2F\')m.2o(4Z,el);J q(2m[0]==\'m.9u\')m.2o(56,el);A g=m.43(el,\'2N\')||\'1E\';q(!3i[g])3i[g]=[];m.2o(3i[g],el)}}}m.4U={6q:6q,3i:3i,4Z:4Z,56:56};E m.4U},6p:C(){E m.4U||m.95()},26:C(el){A B=m.2G(el);q(B)B.26();E 1j}};m.fx=C(30,1r,1f){k.1r=1r;k.30=30;k.1f=1f;q(!1r.b7)1r.b7={}};m.fx.5w={82:C(){(m.fx.3P[k.1f]||m.fx.3P.ap)(k);q(k.1r.3P)k.1r.3P.ax(k.30,k.4o,k)},3E:C(8u,2i,4w){k.9c=(1J 7K()).79();k.4T=8u;k.51=2i;k.4w=4w;k.4o=k.4T;k.H=k.96=0;A 7c=k;C t(7i){E 7c.3P(7i)}t.30=k.30;q(t()&&m.4m.2o(t)==1){m.af=fX(C(){A 4m=m.4m;O(A i=0;i<4m.V;i++)q(!4m[i]())4m.gd(i--,1);q(!4m.V){eT(m.af)}},13)}},3P:C(7i){A t=(1J 7K()).79();q(7i||t>=k.1r.4h+k.9c){k.4o=k.51;k.H=k.96=1;k.82();k.1r.7g[k.1f]=M;A 9s=M;O(A i 2Y k.1r.7g)q(k.1r.7g[i]!==M)9s=1j;q(9s){q(k.1r.76)k.1r.76.ax(k.30)}E 1j}J{A n=t-k.9c;k.96=n/k.1r.4h;k.H=k.1r.2Q(n,0,1,k.1r.4h);k.4o=k.4T+((k.51-k.4T)*k.H);k.82()}E M}};m.3A(m.fx,{3P:{1z:C(fx){m.R(fx.30,{1z:fx.4o})},ap:C(fx){1t{q(fx.30.G&&fx.30.G[fx.1f]!=I)fx.30.G[fx.1f]=fx.4o+fx.4w;J fx.30[fx.1f]=fx.4o}1y(e){}}}});m.6r=C(1Z,3F){k.3F=3F;k.1Z=1Z;A v=m.2t,47;k.9G=m.2h&&m.2t<7;q(!1Z){q(3F)3F();E}m.7m();k.2g=m.1d(\'2g\',{eJ:0},{1n:\'1q\',1l:\'2l\',eN:\'eM\',L:0},m.2b,M);A 4G=m.1d(\'4G\',I,I,k.2g,1);k.2J=[];O(A i=0;i<=8;i++){q(i%3==0)47=m.1d(\'47\',I,{N:\'1M\'},4G,M);k.2J[i]=m.1d(\'2J\',I,I,47,M);A G=i!=4?{eL:0,eK:0}:{1l:\'4y\'};m.R(k.2J[i],G)}k.2J[4].1c=1Z+\' K-1g\';k.ai()};m.6r.5w={ai:C(){A 1e=m.5c+(m.f1||"fi/")+k.1Z+".ak";A ar=m.4M&&m.2t<73?m.2b:I;k.3V=m.1d(\'1N\',I,{1l:\'2l\',Y:\'-4v\'},ar,M);A 3v=k;k.3V.4N=C(){3v.az()};k.3V.1e=1e},az:C(){A o=k.1w=k.3V.L/4,H=[[0,0],[0,-4],[-2,0],[0,-8],0,[-2,-8],[0,-2],[0,-6],[-2,-2]],1u={N:(2*o)+\'F\',L:(2*o)+\'F\'};O(A i=0;i<=8;i++){q(H[i]){q(k.9G){A w=(i==1||i==7)?\'2w%\':k.3V.L+\'F\';A P=m.1d(\'P\',I,{L:\'2w%\',N:\'2w%\',1l:\'4y\',2e:\'1q\'},k.2J[i],M);m.1d(\'P\',I,{5Q:"fo:fn.bv.fm(fl=fe, 1e=\'"+k.3V.1e+"\')",1l:\'2l\',L:w,N:k.3V.N+\'F\',1b:(H[i][0]*o)+\'F\',Y:(H[i][1]*o)+\'F\'},P,M)}J{m.R(k.2J[i],{9t:\'7T(\'+k.3V.1e+\') \'+(H[i][0]*o)+\'F \'+(H[i][1]*o)+\'F\'})}q(1S.3z&&(i==3||i==5))m.1d(\'P\',I,1u,k.2J[i],M);m.R(k.2J[i],1u)}}k.3V=I;q(m.4n[k.1Z])m.4n[k.1Z].5U();m.4n[k.1Z]=k;q(k.3F)k.3F()},4C:C(H,1w,aB,4i,2Q){A B=k.B,5X=B.U.G,1w=1w||0,H=H||{x:B.x.H+1w,y:B.y.H+1w,w:B.x.Z(\'2f\')-2*1w,h:B.y.Z(\'2f\')-2*1w};q(aB)k.2g.G.1n=(H.h>=4*k.1w)?\'1Y\':\'1q\';m.R(k.2g,{1b:(H.x-k.1w)+\'F\',Y:(H.y-k.1w)+\'F\',L:(H.w+2*k.1w)+\'F\'});H.w-=2*k.1w;H.h-=2*k.1w;m.R(k.2J[4],{L:H.w>=0?H.w+\'F\':0,N:H.h>=0?H.h+\'F\':0});q(k.9G)k.2J[3].G.N=k.2J[5].G.N=k.2J[4].G.N},5U:C(bk){q(bk)k.2g.G.1n=\'1q\';J m.3B(k.2g)}};m.6A=C(B,1u){k.B=B;k.1u=1u;k.3l=1u==\'x\'?\'bY\':\'bW\';k.3k=k.3l.5G();k.6m=1u==\'x\'?\'cj\':\'c8\';k.6Y=k.6m.5G();k.9L=1u==\'x\'?\'c7\':\'bX\';k.b5=k.9L.5G();k.1G=k.36=0};m.6A.5w={Z:C(Q){b6(Q){2c\'9T\':E k.1K+k.3s+(k.t-m.2r[\'1w\'+k.3l])/2;2c\'9v\':E k.H+k.cb+k.1G+(k.D-m.2r[\'1w\'+k.3l])/2;2c\'2f\':E k.D+2*k.cb+k.1G+k.36;2c\'5e\':E k.4K-k.3o-k.4S;2c\'8D\':E k.Z(\'5e\')-2*k.cb-k.1G-k.36;2c\'6e\':E k.H-(k.B.1g?k.B.1g.1w:0);2c\'9R\':E k.Z(\'2f\')+(k.B.1g?2*k.B.1g.1w:0);2c\'2K\':E k.1V?1h.3e((k.D-k.1V)/2):0}},8a:C(){k.cb=(k.B.S[\'1w\'+k.3l]-k.t)/2;k.4S=m[\'9D\'+k.9L]},9M:C(){k.t=k.B.el[k.3k]?3H(k.B.el[k.3k]):k.B.el[\'1w\'+k.3l];k.1K=k.B.1K[k.1u];k.3s=(k.B.el[\'1w\'+k.3l]-k.t)/2;q(k.1K==0||k.1K==-1){k.1K=(m.4g[k.3k]/2)+m.4g[\'28\'+k.6m]}},8h:C(){A B=k.B;k.2T=\'1M\';q(B.9n==\'4X\')k.2T=\'4X\';J q(1J 4Y(k.6Y).11(B.46))k.2T=I;J q(1J 4Y(k.b5).11(B.46))k.2T=\'4t\';k.H=k.1K-k.cb+k.3s;q(k.9i&&k.1u==\'x\')B.6M=1h.31(B.6M||k.1a,B.9i*k.1a/B.y.1a);k.D=1h.31(k.1a,B[\'4t\'+k.3l]||k.1a);k.2U=B.5Y?1h.31(B[\'31\'+k.3l],k.1a):k.1a;q(B.2E&&B.3t){k.D=B[k.3k];k.1V=k.1a}q(k.1u==\'x\'&&m.5S)k.2U=B.4s;k.2L=B[\'2L\'+k.1u.bi()];k.3o=m[\'9D\'+k.6m];k.28=m.4g[\'28\'+k.6m];k.4K=m.4g[k.3k]},72:C(i){A B=k.B;q(B.2E&&(B.3t||m.5S)){k.1V=i;k.D=1h.4t(k.D,k.1V);B.S.G[k.6Y]=k.Z(\'2K\')+\'F\'}J k.D=i;B.S.G[k.3k]=i+\'F\';B.U.G[k.3k]=k.Z(\'2f\')+\'F\';q(B.1g)B.1g.4C();q(B.3W)B.3W.G[k.3k]=i+\'F\';q(k.1u==\'y\'&&B.5C&&B.19.G.N!=\'1M\')1t{B.5C.19.G.2e=\'1M\'}1y(e){}q(B.2A){A d=B.2s;q(k.9e===1L)k.9e=B.1s[\'1w\'+k.3l]-d[\'1w\'+k.3l];d.G[k.3k]=(k.D-k.9e)+\'F\';q(k.1u==\'x\')B.4c.G.L=\'1M\';q(B.19)B.19.G[k.3k]=\'1M\'}q(k.1u==\'x\'&&B.1x)B.57(M);q(k.1u==\'x\'&&B.1p&&B.2E){q(i==k.1a)B.1p.5d(\'1a-2F\');J B.1p.4u(\'1a-2F\')}},aa:C(i){k.H=i;k.B.U.G[k.6Y]=i+\'F\';q(k.B.1g)k.B.1g.4C()}};m.5A=C(a,29,3E,35){q(W.bS&&m.2h&&!m.9F){m.2j(W,\'41\',C(){1J m.5A(a,29,3E,35)});E}k.a=a;k.3E=3E;k.35=35||\'2R\';k.2A=(35==\'3D\');k.2E=!k.2A;m.a1=1j;k.1T=[];k.1i=m.1i;m.1i=I;m.7m();A Q=k.Q=m.16.V;O(A i=0;i<m.a4.V;i++){A 2Z=m.a4[i];k[2Z]=29&&1F 29[2Z]!=\'1L\'?29[2Z]:m[2Z]}q(!k.1e)k.1e=a.21;A el=(29&&29.9P)?m.$(29.9P):a;el=k.aW=el.2C(\'1N\')[0]||el;k.6Q=el.1v||a.1v;q(!m.1A(k,\'f3\'))E M;O(A i=0;i<m.16.V;i++){q(m.16[i]&&m.16[i].a==a&&!(k.1i&&k.3q[1]==\'4e\')){m.16[i].3M();E 1j}}q(!m.f5)O(A i=0;i<m.16.V;i++){q(m.16[i]&&m.16[i].aW!=el&&!m.16[i].6D){m.16[i].6P()}}m.16[Q]=k;q(!m.9l&&!m.2q){q(m.16[Q-1])m.16[Q-1].26();q(1F m.3d!=\'1L\'&&m.16[m.3d])m.16[m.3d].26()}k.el=el;k.1K=k.aX||m.6K(el);m.7S();A x=k.x=1J m.6A(k,\'x\');x.9M();A y=k.y=1J m.6A(k,\'y\');y.9M();q(/5v/i.11(el.3J))k.b8(el);k.U=m.1d(\'P\',{1v:\'K-U-\'+k.Q,1c:\'K-U \'+k.a9},{1n:\'1q\',1l:\'2l\',1B:m.4F+=2},I,M);k.U.eX=k.U.eS=m.aP;q(k.35==\'2R\'&&k.3Y==2)k.3Y=0;q(!k.1Z||(k.1i&&k.2E&&k.3q[1]==\'4e\')){k[k.35+\'9H\']()}J q(m.4n[k.1Z]){k.9I();k[k.35+\'9H\']()}J{k.6n();A B=k;1J m.6r(k.1Z,C(){B.9I();B[B.35+\'9H\']()})}E M};m.5A.5w={9o:C(e){q(m.g8)dq(\'dk \'+e.dl+\': \'+e.dD);J 1S.85.21=k.1e},9I:C(){A 1g=k.1g=m.4n[k.1Z];1g.B=k;1g.2g.G.1B=k.U.G.1B-1;m.4n[k.1Z]=I},6n:C(){q(k.6D||k.2r)E;k.2r=m.2r;A B=k;k.2r.2p=C(){B.6P()};q(!m.1A(k,\'d5\'))E;A B=k,l=k.x.Z(\'9T\')+\'F\',t=k.y.Z(\'9T\')+\'F\';q(!2P&&k.1i&&k.3q[1]==\'4e\')A 2P=k.1i;q(2P){l=2P.x.Z(\'9v\')+\'F\';t=2P.y.Z(\'9v\')+\'F\';k.2r.G.1B=m.4F++}4a(C(){q(B.2r)m.R(B.2r,{1b:l,Y:t,1B:m.4F++})},2w)},ey:C(){A B=k;A 1N=W.1d(\'1N\');k.S=1N;1N.4N=C(){q(m.16[B.Q])B.69()};q(m.e3)1N.dp=C(){E 1j};1N.1c=\'K-2R\';m.R(1N,{1n:\'1q\',1o:\'3X\',1l:\'2l\',6M:\'4v\',1B:3});1N.24=m.18.9W;q(m.4M&&m.2t<73)m.2b.1X(1N);q(m.2h&&m.dH)1N.1e=I;1N.1e=k.1e;k.6n()},d4:C(){q(!m.1A(k,\'da\'))E;k.S=m.86(k.a);q(!k.S)k.S=m.4J(k.88);q(!k.S)k.S=m.89();k.a2([\'6C\']);q(k.6C){A 19=m.4p(k.S,\'P\',\'K-19\');q(19)19.1X(k.6C);k.6C.G.1o=\'3X\'}m.1A(k,\'fp\');A 1s=k.1s=k.S;q(/(3x|1k)/.11(k.2I))k.91(1s);m.2b.1X(k.U);m.R(k.U,{1l:\'fa\',94:\'0 \'+m.9B+\'F 0 \'+m.4W+\'F\'});k.S=m.1d(\'P\',{1c:\'K-3D\'},{1l:\'4y\',1B:3,N:0,2e:\'1q\'},k.U);k.4c=m.1d(\'P\',I,I,k.S,1);k.4c.1X(1s);m.R(1s,{1l:\'4y\',1o:\'3X\',9S:m.18.97||\'\'});q(k.L)1s.G.L=k.L+\'F\';q(k.N)m.R(1s,{N:k.N+\'F\',2e:\'1q\'});q(1s.1O<k.4s)1s.G.L=k.4s+\'F\';q(k.2I==\'2W\'&&!m.86(k.a)){k.6n();A B=k;A 2W=1J m.7x(k.a,1s);2W.1e=k.1e;2W.3F=C(){q(m.16[B.Q])B.69()};2W.9z=C(){85.21=B.1e};2W.9r()}J q(k.2I==\'1k\'&&k.3U==\'60\'){k.6T()}J k.69()},69:C(){1t{q(!k.S)E;k.S.4N=I;q(k.6D)E;J k.6D=M;A x=k.x,y=k.y;q(k.2r){m.R(k.2r,{Y:\'-4v\'});k.2r=I;m.1A(k,\'cu\')}q(k.2E){x.1a=k.S.L;y.1a=k.S.N;m.R(k.S,{L:x.t+\'F\',N:y.t+\'F\'});k.U.1X(k.S);m.2b.1X(k.U)}J q(k.7Z)k.7Z();x.8a();y.8a();m.R(k.U,{1b:(x.1K+x.3s-x.cb)+\'F\',Y:(y.1K+x.3s-y.cb)+\'F\'});k.a0();k.bB();A 2M=x.1a/y.1a;x.8h();k.2T(x);y.8h();k.2T(y);q(k.2A)k.b4();q(k.1x)k.57(0,1);q(k.5Y){q(k.2E)k.cG(2M);J k.8x();A 1R=k.1p;q(1R&&k.1i&&1R.2X&&1R.aT){A H=1R.cB.1l||\'\',p;O(A 1u 2Y m.8g)O(A i=0;i<5;i++){p=k[1u];q(H.3b(m.8g[1u][i])){p.H=k.1i[1u].H+(k.1i[1u].1G-p.1G)+(k.1i[1u].D-p.D)*[0,0,.5,1,1][i];q(1R.aT==\'f0\'){q(p.H+p.D+p.1G+p.36>p.28+p.4K-p.4S)p.H=p.28+p.4K-p.D-p.3o-p.4S-p.1G-p.36;q(p.H<p.28+p.3o)p.H=p.28+p.3o}}}}q(k.2E&&k.x.1a>(k.x.1V||k.x.D)){k.bs();q(k.1T.V==1)k.57()}}k.a5()}1y(e){k.9o(e)}},91:C(6c,1M){A c=m.4p(6c,\'7J\',\'K-19\');q(/(1k|3x)/.11(k.2I)){q(k.4j)c.G.L=k.4j+\'F\';q(k.4x)c.G.N=k.4x+\'F\'}},6T:C(){q(k.aD)E;A B=k;k.19=m.4p(k.1s,\'7J\',\'K-19\');q(k.2I==\'1k\'){k.6n();A 5o=m.3w.5J(1);k.19.1X(5o);k.eP=k.1s.1O;q(!k.4j)k.4j=5o.1O;A 5b=k.1s.1U-k.19.1U,h=k.4x||m.4g.N-5b-m.4d-m.6L,4N=k.3U==\'60\'?\' 4N="q (m.16[\'+k.Q+\']) m.16[\'+k.Q+\'].69()" \':\'\';k.19.2d+=\'<1k 2Z="m\'+(1J 7K()).79()+\'" eQ="0" Q="\'+k.Q+\'" \'+\' G="L:\'+k.4j+\'F; N:\'+h+\'F" \'+4N+\' 1e="\'+k.1e+\'" ></1k>\';k.5o=k.19.2C(\'P\')[0];k.1k=k.19.2C(\'1k\')[0];q(k.3U==\'6x\')k.8A()}q(k.2I==\'3x\'){k.19.1v=k.19.1v||\'m-fY-1v-\'+k.Q;A a=k.8e;q(!a.29)a.29={};q(1F a.29.aN==\'1L\')a.29.aN=\'fR\';q(9p)9p.fT(k.1e,k.19.1v,k.4j,k.4x,a.g1||\'7\',a.gb,a.aG,a.29,a.aF)}k.aD=M},7Z:C(){q(k.1k&&!k.4x){k.1k.G.N=k.19.G.N=k.8p()+\'F\'}k.1s.1X(m.3w);q(!k.x.1a)k.x.1a=k.1s.1O;k.y.1a=k.1s.1U;k.1s.9q(m.3w);q(m.2h&&k.aL>3H(k.1s.5y.N)){k.aL=3H(k.1s.5y.N)}m.R(k.U,{1l:\'2l\',94:\'0\'});m.R(k.S,{L:k.x.t+\'F\',N:k.y.t+\'F\'})},8p:C(){A h;1t{A 2B=k.5C=k.1k.9O||k.1k.6g.W;A 3w=2B.1d(\'P\');3w.G.aJ=\'bc\';2B.19.1X(3w);h=3w.8O;q(m.2h)h+=3H(2B.19.5y.4d)+3H(2B.19.5y.6L)-1}1y(e){h=de}E h},8A:C(){A 5i=k.1s.1O-k.5o.1O;m.3B(k.5o);q(5i<0)5i=0;A 5b=k.1s.1U-k.1k.1U;q(k.5C&&!k.4x&&!k.N&&k.y.D==k.y.1a)1t{k.5C.19.G.2e=\'1q\'}1y(e){}m.R(k.1k,{L:1h.9Y(k.x.D-5i)+\'F\',N:1h.9Y(k.y.D-5b)+\'F\'});m.R(k.19,{L:k.1k.G.L,N:k.1k.G.N});k.52=k.1k;k.2s=k.52},b4:C(){k.91(k.1s);q(k.2I==\'3x\'&&k.3U==\'60\')k.6T();q(k.x.D<k.x.1a&&!k.6J)k.x.D=k.x.1a;q(k.y.D<k.y.1a&&!k.6X)k.y.D=k.y.1a;k.2s=k.1s;m.R(k.4c,{1l:\'4y\',L:k.x.D+\'F\'});m.R(k.1s,{8H:\'1E\',L:\'1M\',N:\'1M\'});A 1P=m.4p(k.1s,\'7J\',\'K-19\');q(1P&&!/(1k|3x)/.11(k.2I)){A 5f=1P;1P=m.1d(5f.d8,I,{2e:\'1q\'},I,M);5f.23.dG(1P,5f);1P.1X(m.3w);1P.1X(5f);A 5i=k.1s.1O-1P.1O;A 5b=k.1s.1U-1P.1U;1P.9q(m.3w);A 6E=m.4M||4A.av==\'at\'?1:0;m.R(1P,{L:(k.x.D-5i-6E)+\'F\',N:(k.y.D-5b)+\'F\',2e:\'1M\',1l:\'4y\'});q(6E&&5f.1U>1P.1U){1P.G.L=(3H(1P.G.L)+6E)+\'F\'}k.52=1P;k.2s=k.52}q(k.1k&&k.3U==\'60\')k.8A();q(!k.52&&k.y.D<k.4c.1U)k.2s=k.S;q(k.2s==k.S&&!k.6J&&!/(1k|3x)/.11(k.2I)){k.x.D+=17}q(k.2s&&k.2s.1U>k.2s.23.1U){4a("1t { m.16["+k.Q+"].2s.G.2e = \'1M\'; } 1y(e) {}",m.6W)}},b8:C(5v){A c=5v.fC.7G(\',\');O(A i=0;i<c.V;i++)c[i]=3H(c[i]);q(5v.ff.5G()==\'eI\'){k.x.1K+=c[0]-c[2];k.y.1K+=c[1]-c[2];k.x.t=k.y.t=2*c[2]}J{A 5H,5z,5x=5H=c[0],5B=5z=c[1];O(A i=0;i<c.V;i++){q(i%2==0){5x=1h.31(5x,c[i]);5H=1h.4t(5H,c[i])}J{5B=1h.31(5B,c[i]);5z=1h.4t(5z,c[i])}}k.x.1K+=5x;k.x.t=5H-5x;k.y.1K+=5B;k.y.t=5z-5B}},2T:C(p,5u){A 4H,2P=p.2L,1u=p==k.x?\'x\':\'y\';q(2P&&2P.3b(/ /)){4H=2P.7G(\' \');2P=4H[0]}q(2P&&m.$(2P)){p.H=m.6K(m.$(2P))[1u];q(4H&&4H[1]&&4H[1].3b(/^[-]?[0-9]+F$/))p.H+=3H(4H[1]);q(p.D<p.2U)p.D=p.2U}J q(p.2T==\'1M\'||p.2T==\'4X\'){A 8C=1j;A 5s=p.B.5Y;q(p.2T==\'4X\')p.H=1h.3e(p.28+(p.4K+p.3o-p.4S-p.Z(\'2f\'))/2);J p.H=1h.3e(p.H-((p.Z(\'2f\')-p.t)/2));q(p.H<p.28+p.3o){p.H=p.28+p.3o;8C=M}q(!5u&&p.D<p.2U){p.D=p.2U;5s=1j}q(p.H+p.Z(\'2f\')>p.28+p.4K-p.4S){q(!5u&&8C&&5s){p.D=1h.31(p.D,p.Z(1u==\'y\'?\'5e\':\'8D\'))}J q(p.Z(\'2f\')<p.Z(\'5e\')){p.H=p.28+p.4K-p.4S-p.Z(\'2f\')}J{p.H=p.28+p.3o;q(!5u&&5s)p.D=p.Z(1u==\'y\'?\'5e\':\'8D\')}}q(!5u&&p.D<p.2U){p.D=p.2U;5s=1j}}J q(p.2T==\'4t\'){p.H=1h.dm(p.H-p.D+p.t)}q(p.H<p.3o){A cH=p.H;p.H=p.3o;q(5s&&!5u)p.D=p.D-(p.H-cH)}},cG:C(2M){A x=k.x,y=k.y,3T=1j,3f=1h.31(x.1a,x.D),3y=1h.31(y.1a,y.D),3t=(k.3t||m.5S);q(3f/3y>2M){ 3f=3y*2M;q(3f<x.2U){3f=x.2U;3y=3f/2M}3T=M}J q(3f/3y<2M){ 3y=3f/2M;3T=M}q(m.5S&&x.1a<x.2U){x.1V=x.1a;y.D=y.1V=y.1a}J q(k.3t){x.1V=3f;y.1V=3y}J{x.D=3f;y.D=3y}3T=k.8x(k.3t?I:2M,3T);q(3t&&y.D<y.1V){y.1V=y.D;x.1V=y.D*2M}q(3T||3t){x.H=x.1K-x.cb+x.3s;x.2U=x.D;k.2T(x,M);y.H=y.1K-y.cb+y.3s;y.2U=y.D;k.2T(y,M);q(k.1x)k.57()}},8x:C(2M,3T){A x=k.x,y=k.y;q(k.1x&&(k.2E||k.6X)){5g(y.D>k.6k&&x.D>k.4s&&y.Z(\'2f\')>y.Z(\'5e\')){y.D-=10;q(2M)x.D=y.D*2M;k.57(0,1);3T=M}}E 3T},dS:C(){q(k.2s){A h=/1k/i.11(k.2s.3J)?(k.8p()+1)+\'F\':\'1M\';q(k.19)k.19.G.N=h;k.2s.G.N=h;k.y.72(k.1s.1U)}},a5:C(){A x=k.x,y=k.y;k.59(\'1q\');m.1A(k,\'et\');q(k.1p&&k.1p.2D)k.1p.2D.5t();k.9b(1,{U:{L:x.Z(\'2f\'),N:y.Z(\'2f\'),1b:x.H,Y:y.H},S:{1b:x.1G+x.Z(\'2K\'),Y:y.1G+y.Z(\'2K\'),L:x.1V||x.D,N:y.1V||y.D}},m.6W)},9b:C(1I,2i,4i){A 5M=k.3q,8o=1I?(k.1i?k.1i.a:I):m.2q,t=(5M[1]&&8o&&m.43(8o,\'3q\')[1]==5M[1])?5M[1]:5M[0];q(k[t]&&t!=\'2F\'){k[t](1I,2i);E}q(k.1g&&!k.3Y){q(1I)k.1g.4C();J k.1g.5U((k.2A&&k.4D))}q(!1I)k.78();A B=k,x=B.x,y=B.y,2Q=k.2Q;q(!1I)2Q=k.cF||2Q;A 6x=1I?C(){q(B.1g)B.1g.2g.G.1n="1Y";4a(C(){B.6I()},50)}:C(){B.5D()};q(1I)m.R(k.U,{L:x.t+\'F\',N:y.t+\'F\'});q(1I&&k.2A){m.R(k.U,{1b:(x.1K-x.cb+x.3s)+\'F\',Y:(y.1K-y.cb+y.3s)+\'F\'})}q(k.cD){m.R(k.U,{1z:1I?0:1});m.3A(2i.U,{1z:1I})}m.2z(k.U,2i.U,{4h:4i,2Q:2Q,3P:C(3j,2H){q(B.1g&&B.3Y&&2H.1f==\'Y\'){A 5W=1I?2H.H:1-2H.H;A H={w:x.t+(x.Z(\'2f\')-x.t)*5W,h:y.t+(y.Z(\'2f\')-y.t)*5W,x:x.1K+(x.H-x.1K)*5W,y:y.1K+(y.H-y.1K)*5W};B.1g.4C(H,0,1)}q(B.2A){q(2H.1f==\'1b\')B.4c.G.1b=(x.H-3j)+\'F\';q(2H.1f==\'Y\')B.4c.G.Y=(y.H-3j)+\'F\'}}});m.2z(k.S,2i.S,4i,2Q,6x);q(1I){k.U.G.1n=\'1Y\';k.S.G.1n=\'1Y\';q(k.2A)k.1s.G.1n=\'1Y\';k.a.1c+=\' K-4I-46\'}},6w:C(1I,2i){k.3Y=1j;A B=k,t=1I?m.6W:0;q(1I){m.2z(k.U,2i.U,0);m.R(k.U,{1z:0,1n:\'1Y\'});m.2z(k.S,2i.S,0);k.S.G.1n=\'1Y\';m.2z(k.U,{1z:1},t,I,C(){B.6I()})}q(k.1g){k.1g.2g.G.1B=k.U.G.1B;A 6Z=1I||-1,1w=k.1g.1w,8r=1I?3:1w,8q=1I?1w:3;O(A i=8r;6Z*i<=6Z*8q;i+=6Z,t+=25){(C(){A o=1I?8q-i:8r-i;4a(C(){B.1g.4C(0,o,1)},t)})()}}q(1I){}J{4a(C(){q(B.1g)B.1g.5U(B.4D);B.78();m.2z(B.U,{1z:0},m.9A,I,C(){B.5D()})},t)}},4e:C(1I,2i,8u){q(!1I)E;A B=k,1i=k.1i,x=k.x,y=k.y,3n=1i.x,3g=1i.y,U=k.U,S=k.S,1x=k.1x;m.4z(W,\'7D\',m.6H);m.R(S,{L:(x.1V||x.D)+\'F\',N:(y.1V||y.D)+\'F\'});q(1x)1x.G.2e=\'1Y\';k.1g=1i.1g;q(k.1g)k.1g.B=B;1i.1g=I;A 5l=m.1d(\'P\',{1c:\'K-\'+k.35},{1l:\'2l\',1B:4,2e:\'1q\',1o:\'1E\'});A 8t={cN:1i,cM:k};O(A n 2Y 8t){k[n]=8t[n].S.5J(1);m.R(k[n],{1l:\'2l\',8H:0,1n:\'1Y\'});5l.1X(k[n])}U.1X(5l);q(k.2A)m.R(k.4c,{1b:0,Y:0});q(1x){1x.1c=\'\';U.1X(1x)}5l.G.1o=\'\';1i.S.G.1o=\'1E\';q(m.4M&&m.2t<73){k.U.G.1n=\'1Y\'}m.2z(U,{L:x.D},{4h:m.cE,3P:C(3j,2H){A H=2H.H,4B=1-H;A 1f,D={},93=[\'H\',\'D\',\'1G\',\'36\'];O(A n 2Y 93){1f=93[n];D[\'x\'+1f]=1h.3e(4B*3n[1f]+H*x[1f]);D[\'y\'+1f]=1h.3e(4B*3g[1f]+H*y[1f]);D.cI=1h.3e(4B*(3n.1V||3n.D)+H*(x.1V||x.D));D.6S=1h.3e(4B*3n.Z(\'2K\')+H*x.Z(\'2K\'));D.cJ=1h.3e(4B*(3g.1V||3g.D)+H*(y.1V||y.D));D.6V=1h.3e(4B*3g.Z(\'2K\')+H*y.Z(\'2K\'))}q(B.1g)B.1g.4C({x:D.3h,y:D.3r,w:D.5L+D.44+D.8U+2*x.cb,h:D.5K+D.45+D.8T+2*y.cb});1i.U.G.d7=\'d6(\'+(D.3r-3g.H)+\'F, \'+(D.5L+D.44+D.8U+D.3h+2*3n.cb-3n.H)+\'F, \'+(D.5K+D.45+D.8T+D.3r+2*3g.cb-3g.H)+\'F, \'+(D.3h-3n.H)+\'F)\';m.R(S,{Y:(D.45+y.Z(\'2K\'))+\'F\',1b:(D.44+x.Z(\'2K\'))+\'F\',4d:(y.H-D.3r)+\'F\',4W:(x.H-D.3h)+\'F\'});m.R(U,{Y:D.3r+\'F\',1b:D.3h+\'F\',L:(D.44+D.8U+D.5L+2*x.cb)+\'F\',N:(D.45+D.8T+D.5K+2*y.cb)+\'F\'});m.R(5l,{L:(D.cI||D.5L)+\'F\',N:(D.cJ||D.5K)+\'F\',1b:(D.44+D.6S)+\'F\',Y:(D.45+D.6V)+\'F\',1n:\'1Y\'});m.R(B.cN,{Y:(3g.H-D.3r+3g.1G-D.45+3g.Z(\'2K\')-D.6V)+\'F\',1b:(3n.H-D.3h+3n.1G-D.44+3n.Z(\'2K\')-D.6S)+\'F\'});m.R(B.cM,{1z:H,Y:(y.H-D.3r+y.1G-D.45+y.Z(\'2K\')-D.6V)+\'F\',1b:(x.H-D.3h+x.1G-D.44+x.Z(\'2K\')-D.6S)+\'F\'});q(1x)m.R(1x,{L:D.5L+\'F\',N:D.5K+\'F\',1b:(D.44+x.cb)+\'F\',Y:(D.45+y.cb)+\'F\'})},76:C(){U.G.1n=S.G.1n=\'1Y\';S.G.1o=\'3X\';m.3B(5l);B.6I();1i.5D();B.1i=I}})},bQ:C(o,el){q(!k.1i)E 1j;O(A i=0;i<k.1i.1T.V;i++){A 6G=m.$(\'22\'+k.1i.1T[i]);q(6G&&6G.22==o.22){k.9V();6G.cS=k.Q;m.2o(k.1T,k.1i.1T[i]);E M}}E 1j},6I:C(){k.55=M;k.3M();q(k.2A&&k.3U==\'6x\')k.6T();q(k.1k){1t{A B=k,2B=k.1k.9O||k.1k.6g.W;m.2j(2B,\'8y\',C(){q(m.3d!=B.Q)B.3M()})}1y(e){}q(m.2h&&1F k.62!=\'cW\')k.1k.G.L=(k.4j-1)+\'F\'}q(k.4b)m.1u(k);q(m.2q&&m.2q==k.a)m.2q=I;k.cL();A p=m.4g,8Q=m.7B.x+p.5O,8P=m.7B.y+p.5R;k.9C=k.x.H<8Q&&8Q<k.x.H+k.x.Z(\'2f\')&&k.y.H<8P&&8P<k.y.H+k.y.Z(\'2f\');q(k.1x)k.bn();m.1A(k,\'d1\')},cL:C(){A Q=k.Q;A 1Z=k.1Z;1J m.6r(1Z,C(){1t{m.16[Q].cP()}1y(e){}})},cP:C(){A 1D=k.7V(1);q(1D&&1D.2p.cC().3b(/m\\.2F/))A 1N=m.1d(\'1N\',{1e:m.7s(1D)})},7V:C(2n){A 7U=k.7v(),as=m.4U.3i[k.2N||\'1E\'];q(as&&!as[7U+2n]&&k.1p&&k.1p.cm){q(2n==1)E as[0];J q(2n==-1)E as[as.V-1]}E(as&&as[7U+2n])||I},7v:C(){A 2a=m.6p().3i[k.2N||\'1E\'];q(2a)O(A i=0;i<2a.V;i++){q(2a[i]==k.a)E i}E I},bq:C(){q(k[k.6l]){A 2a=m.4U.3i[k.2N||\'1E\'];q(2a){A s=m.18.3G.2k(\'%1\',k.7v()+1).2k(\'%2\',2a.V);k[k.6l].2d=\'<P 1W="K-3G">\'+s+\'</P>\'+k[k.6l].2d}}},a0:C(){q(!k.1i){O(A i=0;i<m.6u.V;i++){A 1R=m.6u[i],3c=1R.2N;q(1F 3c==\'1L\'||3c===I||3c===k.2N)k.1p=1J m.83(k.Q,1R)}}J{k.1p=k.1i.1p}A 1R=k.1p;q(!1R)E;A Q=1R.4k=k.Q;1R.ch();1R.5d(\'1a-2F\');q(1R.2X){k.4O(m.3A(1R.cB||{},{4P:1R.2X,22:\'2X\',1B:5}))}q(1R.2D)1R.2D.7p(k);q(!k.1i&&k.42)1R.3L(M);q(1R.42){1R.42=4a(C(){m.1D(Q)},(1R.fH||fs))}},6P:C(){m.3B(k.U);m.16[k.Q]=I;q(m.2q==k.a)m.2q=I;m.9x(k.Q);q(k.2r)m.2r.G.1b=\'-4v\';m.1A(k,\'cu\')},bp:C(){q(k.67)E;k.67=m.1d(\'a\',{21:m.ct,2L:m.cs,1c:\'K-67\',2d:m.18.cq,24:m.18.cr});k.4O({4P:k.67,1l:k.cv||\'Y 1b\',22:\'67\'})},a2:C(8f,cy){O(A i=0;i<8f.V;i++){A T=8f[i],s=I;q(T==\'9X\'&&!m.1A(k,\'eH\'))E;J q(T==\'58\'&&!m.1A(k,\'eG\'))E;q(!k[T+\'5p\']&&k.6Q)k[T+\'5p\']=T+\'-O-\'+k.6Q;q(k[T+\'5p\'])k[T]=m.4J(k[T+\'5p\']);q(!k[T]&&!k[T+\'8j\']&&k[T+\'cw\'])1t{s=fh(k[T+\'cw\'])}1y(e){}q(!k[T]&&k[T+\'8j\']){s=k[T+\'8j\']}q(!k[T]&&!s){k[T]=m.4J(k.a[\'cA\'+T+\'5p\']);q(!k[T]){A 1D=k.a.cz;5g(1D&&!m.77(1D)){q((1J 4Y(\'K-\'+T)).11(1D.1c||I)){q(!1D.1v)k.a[\'cA\'+T+\'5p\']=1D.1v=\'22\'+m.61++;k[T]=m.4J(1D.1v);5m}1D=1D.cz}}}q(!k[T]&&!s&&k.6l==T)s=\'\\n\';q(!k[T]&&s)k[T]=m.1d(\'P\',{1c:\'K-\'+T,2d:s});q(cy&&k[T]){A o={1l:(T==\'58\')?\'5N\':\'7E\'};O(A x 2Y k[T+\'cx\'])o[x]=k[T+\'cx\'][x];o.4P=k[T];k.4O(o)}}},59:C(1n){q(m.cO)k.6B(\'fk\',1n);q(m.cQ)k.6B(\'dd\',1n);q(m.6y)k.6B(\'*\',1n)},6B:C(3J,1n){A 1m=W.2C(3J);A 1f=3J==\'*\'?\'2e\':\'1n\';O(A i=0;i<1m.V;i++){q(1f==\'1n\'||(W.8L.cK(1m[i],"").co(\'2e\')==\'1M\'||1m[i].bH(\'1q-by\')!=I)){A 2S=1m[i].bH(\'1q-by\');q(1n==\'1Y\'&&2S){2S=2S.2k(\'[\'+k.Q+\']\',\'\');1m[i].5F(\'1q-by\',2S);q(!2S)1m[i].G[1f]=1m[i].9N}J q(1n==\'1q\'){A 3N=m.6K(1m[i]);3N.w=1m[i].1O;3N.h=1m[i].1U;q(!k.4b){A bl=(3N.x+3N.w<k.x.Z(\'6e\')||3N.x>k.x.Z(\'6e\')+k.x.Z(\'9R\'));A bG=(3N.y+3N.h<k.y.Z(\'6e\')||3N.y>k.y.Z(\'6e\')+k.y.Z(\'9R\'))}A 6F=m.9U(1m[i]);q(!bl&&!bG&&6F!=k.Q){q(!2S){1m[i].5F(\'1q-by\',\'[\'+k.Q+\']\');1m[i].9N=1m[i].G[1f];1m[i].G[1f]=\'1q\'}J q(2S.bF(\'[\'+k.Q+\']\')==-1){1m[i].5F(\'1q-by\',2S+\'[\'+k.Q+\']\')}}J q((2S==\'[\'+k.Q+\']\'||m.3d==6F)&&6F!=k.Q){1m[i].5F(\'1q-by\',\'\');1m[i].G[1f]=1m[i].9N||\'\'}J q(2S&&2S.bF(\'[\'+k.Q+\']\')>-1){1m[i].5F(\'1q-by\',2S.2k(\'[\'+k.Q+\']\',\'\'))}}}}},3M:C(){k.U.G.1B=m.4F+=2;O(A i=0;i<m.16.V;i++){q(m.16[i]&&i==m.3d){A 4r=m.16[i];4r.S.1c+=\' K-\'+4r.35+\'-9J\';q(4r.2E){4r.S.G.4L=m.3Z?\'bE\':\'7Q\';4r.S.24=m.18.bD}m.1A(4r,\'eW\')}}q(k.1g)k.1g.2g.G.1B=k.U.G.1B-1;k.S.1c=\'K-\'+k.35;q(k.2E){k.S.24=m.18.9W;q(m.6h){m.54=1S.3z?\'7Q\':\'7T(\'+m.5c+m.6h+\'), 7Q\';q(m.3Z&&m.2t<6)m.54=\'bE\';k.S.G.4L=m.54}}m.3d=k.Q;m.2j(W,1S.3z?\'6U\':\'71\',m.68);m.1A(k,\'fd\')},9m:C(x,y){k.x.aa(x);k.y.aa(y)},3O:C(e){A w,h,r=e.L/e.N;w=1h.4t(e.L+e.dX,1h.31(k.4s,k.x.1a));q(k.2E&&1h.9Y(w-k.x.1a)<12)w=k.x.1a;h=k.2A?e.N+e.dY:w/r;q(h<1h.31(k.6k,k.y.1a)){h=1h.31(k.6k,k.y.1a);q(k.2E)w=h*r}k.9h(w,h)},9h:C(w,h){k.y.72(h);k.x.72(w);k.U.G.N=k.y.Z(\'2f\')+\'F\'},26:C(){q(k.62||!k.55)E;q(k.3q[1]==\'4e\'&&m.2q){m.2G(m.2q).6P();m.2q=I}q(!m.1A(k,\'eV\'))E;k.62=M;q(k.1p&&!m.2q)k.1p.3p();m.4z(W,1S.3z?\'6U\':\'71\',m.68);1t{q(k.2A)k.bJ();k.S.G.4L=\'fj\';k.9b(0,{U:{L:k.x.t,N:k.y.t,1b:k.x.1K-k.x.cb+k.x.3s,Y:k.y.1K-k.y.cb+k.y.3s},S:{1b:0,Y:0,L:k.x.t,N:k.y.t}},m.9A)}1y(e){k.5D()}},bJ:C(){q(m.6y){q(!m.6s)m.6s=m.1d(\'P\',I,{1l:\'2l\'},m.2b);m.R(m.6s,{L:k.x.D+\'F\',N:k.y.D+\'F\',1b:k.x.H+\'F\',Y:k.y.H+\'F\',1o:\'3X\'})}q(k.2I==\'3x\')1t{m.$(k.19.1v).f9()}1y(e){}q(k.3U==\'6x\'&&!k.4D)k.bK();q(k.2s&&k.2s!=k.52)k.2s.G.2e=\'1q\'},bK:C(){q(m.2h&&k.1k)1t{k.1k.6g.W.19.2d=\'\'}1y(e){}q(k.2I==\'3x\')9p.fb(k.19.1v);k.19.2d=\'\'},bx:C(){q(k.1g)k.1g.2g.G.1o=\'1E\';k.3W=I;k.U.G.1o=\'1E\';k.55=1j;m.2o(m.4R,k)},bP:C(){1t{m.16[k.Q]=k;q(!m.9l&&m.3d!=k.Q){1t{m.16[m.3d].26()}1y(e){}}A z=m.4F++,5X={1o:\'\',1B:z};m.R(k.U,5X);k.62=1j;A o=k.1g||0;q(o){q(!k.3Y)5X.1n=\'1q\';m.R(o.2g,5X)}q(k.1p){k.a0()}k.a5()}1y(e){}},4O:C(o){A el=o.4P,53=(o.bO==\'2x\'&&!/7M$/.11(o.1l));q(1F el==\'a8\')el=m.4J(el);q(o.3D)el=m.1d(\'P\',{2d:o.3D});q(!el||1F el==\'a8\')E;q(!m.1A(k,\'f7\',{14:el}))E;el.G.1o=\'3X\';o.22=o.22||o.4P;q(k.3q[1]==\'4e\'&&k.bQ(o,el))E;k.9V();A L=o.L&&/^[0-9]+(F|%)$/.11(o.L)?o.L:\'1M\';q(/^(1b|3m)7M$/.11(o.1l)&&!/^[0-9]+F$/.11(o.L))L=\'f2\';A 14=m.1d(\'P\',{1v:\'22\'+m.61++,22:o.22},{1l:\'2l\',1n:\'1q\',L:L,9S:m.18.97||\'\',1z:0},53?m.2x:k.1x,M);q(53)14.6R=k.Q;14.1X(el);m.3A(14,{1z:1,bN:0,bL:0,4i:(o.6w===0||o.6w===1j||(o.6w==2&&m.2h))?0:5Z});m.3A(14,o);q(k.bo){k.5V(14);q(!14.7d||k.9C)m.2z(14,{1z:14.1z},14.4i)}m.2o(k.1T,m.61-1)},5V:C(14){A p=14.1l||\'9a 4X\',53=(14.bO==\'2x\'),74=14.bN,6O=14.bL;q(53){m.2x.G.1o=\'3X\';14.6R=k.Q;q(14.1O>14.23.1O)14.G.L=\'2w%\'}J q(14.23!=k.1x)k.1x.1X(14);q(/1b$/.11(p))14.G.1b=74+\'F\';q(/4X$/.11(p))m.R(14,{1b:\'50%\',4W:(74-1h.3e(14.1O/2))+\'F\'});q(/3m$/.11(p))14.G.3m=-74+\'F\';q(/^bM$/.11(p)){m.R(14,{3m:\'2w%\',9B:k.x.cb+\'F\',Y:-k.y.cb+\'F\',4Q:-k.y.cb+\'F\',2e:\'1M\'});k.x.1G=14.1O}J q(/^bC$/.11(p)){m.R(14,{1b:\'2w%\',4W:k.x.cb+\'F\',Y:-k.y.cb+\'F\',4Q:-k.y.cb+\'F\',2e:\'1M\'});k.x.36=14.1O}A 9d=14.23.1U;14.G.N=\'1M\';q(53&&14.1U>9d)14.G.N=m.3Z?9d+\'F\':\'2w%\';q(/^Y/.11(p))14.G.Y=6O+\'F\';q(/^9a/.11(p))m.R(14,{Y:\'50%\',4d:(6O-1h.3e(14.1U/2))+\'F\'});q(/^4Q/.11(p))14.G.4Q=-6O+\'F\';q(/^5N$/.11(p)){m.R(14,{1b:(-k.x.1G-k.x.cb)+\'F\',3m:(-k.x.36-k.x.cb)+\'F\',4Q:\'2w%\',6L:k.y.cb+\'F\',L:\'1M\'});k.y.1G=14.1U}J q(/^7E$/.11(p)){m.R(14,{1l:\'4y\',1b:(-k.x.1G-k.x.cb)+\'F\',3m:(-k.x.36-k.x.cb)+\'F\',Y:\'2w%\',4d:k.y.cb+\'F\',L:\'1M\'});k.y.36=14.1U;14.G.1l=\'2l\'}},bB:C(){k.a2([\'58\',\'9X\'],M);k.bq();q(k.9X)m.1A(k,\'eE\');q(k.58)m.1A(k,\'eF\');q(k.58&&k.a7)k.58.1c+=\' K-3u\';q(m.br)k.bp();O(A i=0;i<m.1T.V;i++){A o=m.1T[i],6N=o.9P,3c=o.2N;q((!6N&&!3c)||(6N&&6N==k.6Q)||(3c&&3c===k.2N)){q(k.2E||(k.2A&&o.eO))k.4O(o)}}A 7I=[];O(A i=0;i<k.1T.V;i++){A o=m.$(\'22\'+k.1T[i]);q(/7M$/.11(o.1l))k.5V(o);J m.2o(7I,o)}O(A i=0;i<7I.V;i++)k.5V(7I[i]);k.bo=M},9V:C(){q(!k.1x)k.1x=m.1d(\'P\',{1c:k.a9},{1l:\'2l\',L:(k.x.D||(k.3t?k.L:I)||k.x.1a)+\'F\',N:(k.y.D||k.y.1a)+\'F\',1n:\'1q\',2e:\'1q\',1B:m.2h?4:\'1M\'},m.2b,M)},57:C(98,bm){A 1x=k.1x,x=k.x,y=k.y;m.R(1x,{L:x.D+\'F\',N:y.D+\'F\'});q(98||bm){O(A i=0;i<k.1T.V;i++){A o=m.$(\'22\'+k.1T[i]);A 9E=(m.3Z||W.7a==\'8v\');q(o&&/^(5N|7E)$/.11(o.1l)){q(9E){o.G.L=(1x.1O+2*x.cb+x.1G+x.36)+\'F\'}y[o.1l==\'5N\'?\'1G\':\'36\']=o.1U}q(o&&9E&&/^(1b|3m)7M$/.11(o.1l)){o.G.N=(1x.1U+2*y.cb)+\'F\'}}}q(98){m.R(k.S,{Y:y.1G+\'F\'});m.R(1x,{Y:(y.1G+y.cb)+\'F\'})}},bn:C(){A b=k.1x;b.1c=\'\';m.R(b,{Y:(k.y.1G+k.y.cb)+\'F\',1b:(k.x.1G+k.x.cb)+\'F\',2e:\'1Y\'});q(m.4M)b.G.1n=\'1Y\';k.U.1X(b);O(A i=0;i<k.1T.V;i++){A o=m.$(\'22\'+k.1T[i]);o.G.1B=o.1B||4;q(!o.7d||k.9C){o.G.1n=\'1Y\';m.R(o,{1n:\'1Y\',1o:\'\'});m.2z(o,{1z:o.1z},o.4i)}}},78:C(){q(!k.1T.V)E;q(k.1p){A c=k.1p.2X;q(c&&m.2G(c)==k)c.23.9q(c)}O(A i=0;i<k.1T.V;i++){A o=m.$(\'22\'+k.1T[i]);q(o&&o.23==m.2x&&m.2G(o)==k)m.3B(o)}q(k.2A&&k.4D){k.1x.G.Y=\'-4v\';m.2b.1X(k.1x)}J m.3B(k.1x)},bs:C(){q(k.1p&&k.1p.2X){k.1p.4u(\'1a-2F\');E}k.7u=m.1d(\'a\',{21:\'bt:m.16[\'+k.Q+\'].7r();\',24:m.18.9Z,1c:\'K-1a-2F\'});q(!m.1A(k,\'fq\'))E;k.4O({4P:k.7u,1l:m.bz,7d:M,1z:m.bA})},7r:C(){1t{q(!m.1A(k,\'fZ\'))E;q(k.7u)m.3B(k.7u);k.3M();A 3f=k.x.D,3y=k.y.D;k.9h(k.x.1a,k.y.1a);A 3h=k.x.H-(k.x.D-3f)/2;q(3h<m.4W)3h=m.4W;A 3r=k.y.H-(k.y.D-3y)/2;q(3r<m.4d)3r=m.4d;k.9m(3h,3r);k.59(\'1q\')}1y(e){k.9o(e)}},5D:C(){k.a.1c=k.a.1c.2k(\'K-4I-46\',\'\');k.59(\'1Y\');q(k.2A&&k.4D&&k.3q[1]!=\'4e\'){k.bx()}J{q(k.1g&&k.3Y)k.1g.5U();m.3B(k.U)}q(m.6s)m.6s.G.1o=\'1E\';k.78();q(!m.2x.7L.V)m.2x.G.1o=\'1E\';q(k.4b)m.9x(k.Q);m.1A(k,\'fW\');m.16[k.Q]=I;m.bw()}};m.7x=C(a,S,7t){k.a=a;k.S=S;k.7t=7t};m.7x.5w={9r:C(){A 2V;q(!k.1e)k.1e=m.7s(k.a);q(k.1e.3b(\'#\')){A 2a=k.1e.7G(\'#\');k.1e=2a[0];k.1v=2a[1]}q(m.7k[k.1e]){k.cd=m.7k[k.1e];q(k.1v)k.a3();J k.6f();E}1t{2V=1J cp()}1y(e){1t{2V=1J bu("fS.bR")}1y(e){1t{2V=1J bu("bv.bR")}1y(e){k.9z()}}}A 3v=k;2V.gc=C(){q(3v.2V.bS==4){q(3v.1v)3v.a3();J 3v.6f()}};A 1e=k.1e;k.2V=2V;q(m.g3)1e=1e.2k(/$/,(/\\?/.11(1e)?\'&\':\'?\')+\'g6=\'+(1J 7K()).79());2V.ca(\'fQ\',1e,M);2V.ce(\'X-fA-fB\',\'cp\');2V.ce(\'fu-fv\',\'fL/x-fO-9j-fJ\');2V.fF(I)},a3:C(){m.7m();A 4l=1S.3z||m.cf?{1e:\'fI:eC\'}:I;k.1k=m.1d(\'1k\',4l,{1l:\'2l\',Y:\'-4v\'},m.2b);k.6f()},6f:C(){A s=k.cd||k.2V.dn,7H;q(k.7t)m.7k[k.1e]=s;q(!m.2h||m.2t>=5.5){s=s.2k(1J 4Y(\'<di[^>]*>\',\'c9\'),\'\').2k(1J 4Y(\'<cc[^>]*>.*?</cc>\',\'c9\'),\'\');q(k.1k){A 2B=k.1k.9O;q(!2B&&k.1k.6g)2B=k.1k.6g.W;q(!2B){A 3v=k;4a(C(){3v.6f()},25);E}2B.ca();2B.dg(s);2B.26();1t{s=2B.9Q(k.1v).2d}1y(e){1t{s=k.1k.W.9Q(k.1v).2d}1y(e){}}m.3B(k.1k)}J{7H=/(<19[^>]*>|<\\/19>)/db;q(7H.11(s))s=s.7G(7H)[m.3R?1:2]}}m.4p(k.S,\'7J\',\'K-19\').2d=s;k.3F();O(A x 2Y k)k[x]=I}};m.83=C(4k,1r){q(m.cX!==1j)m.95();k.4k=4k;O(A x 2Y 1r)k[x]=1r[x];q(k.cZ)k.cg();q(k.2D)k.2D=m.ci(k)};m.83.5w={cg:C(){k.2X=m.1d(\'P\',{2d:m.8b(m.8i.2X)},I,m.2b);A 6j=[\'3L\',\'3p\',\'3a\',\'1D\',\'3u\',\'1a-2F\',\'26\'];k.1Q={};A 3v=k;O(A i=0;i<6j.V;i++){k.1Q[6j[i]]=m.4p(k.2X,\'1H\',\'K-\'+6j[i]);k.4u(6j[i])}k.1Q.3p.G.1o=\'1E\'},ch:C(){q(k.cm||!k.2X)E;A B=m.16[k.4k],5q=B.7v(),2m=/7w$/;q(5q==0)k.5d(\'3a\');J q(2m.11(k.1Q.3a.2C(\'a\')[0].1c))k.4u(\'3a\');q(5q+1==m.4U.3i[B.2N||\'1E\'].V){k.5d(\'1D\');k.5d(\'3L\')}J q(2m.11(k.1Q.1D.2C(\'a\')[0].1c)){k.4u(\'1D\');k.4u(\'3L\')}},4u:C(1Q){q(!k.1Q)E;A cn=k,a=k.1Q[1Q].2C(\'a\')[0],2m=/7w$/;a.2p=C(){cn[1Q]();E 1j};q(2m.11(a.1c))a.1c=a.1c.2k(2m,\'\')},5d:C(1Q){q(!k.1Q)E;A a=k.1Q[1Q].2C(\'a\')[0];a.2p=C(){E 1j};q(!/7w$/.11(a.1c))a.1c+=\' 7w\'},cl:C(){q(k.42)k.3p();J k.3L()},3L:C(ck){q(k.1Q){k.1Q.3L.G.1o=\'1E\';k.1Q.3p.G.1o=\'\'}k.42=M;q(!ck)m.1D(k.4k)},3p:C(){q(k.1Q){k.1Q.3p.G.1o=\'1E\';k.1Q.3L.G.1o=\'\'}d9(k.42);k.42=I},3a:C(){k.3p();m.3a(k.1Q.3a)},1D:C(){k.3p();m.1D(k.1Q.1D)},3u:C(){},\'1a-2F\':C(){m.2G().7r()},26:C(){m.26(k.1Q.26)}};m.ci=C(1p){C 7p(B){m.3A(1r||{},{4P:4E,22:\'2D\',1c:\'K-2D-\'+5k+\'-14 \'+(1r.1c||\'\')});q(m.3Z)1r.6w=0;B.4O(1r);m.R(4E.23,{2e:\'1q\'})};C 28(3K){5t(1L,1h.3e(3K*4E[3S?\'1O\':\'1U\']*0.7))};C 5t(i,80){q(i===1L)O(A j=0;j<5I.V;j++){q(5I[j]==m.16[1p.4k].a){i=j;5m}}q(i===1L)E;A as=4E.2C(\'a\'),4I=as[i],48=4I.23,1b=3S?\'cj\':\'c8\',3m=3S?\'c7\':\'bX\',L=3S?\'bY\':\'bW\',4V=\'1w\'+1b,1O=\'1w\'+L,7e=P.23.23[1O],5j=7e-2g[1O],6o=3H(2g.G[3S?\'1b\':\'Y\'])||0,2O=6o,ej=20;q(80!==1L){2O=6o-80;q(5j>0)5j=0;q(2O>0)2O=0;q(2O<5j)2O=5j}J{O(A j=0;j<as.V;j++)as[j].1c=\'\';4I.1c=\'K-4I-46\';A 7X=i>0?as[i-1].23[4V]:48[4V],7Y=48[4V]+48[1O]+(as[i+1]?as[i+1].23[1O]:0);q(7Y>7e-6o)2O=7e-7Y;J q(7X<-6o)2O=-7X}A 8R=48[4V]+(48[1O]-7f[1O])/2+2O;m.2z(2g,3S?{1b:2O}:{Y:2O},I,\'8S\');m.2z(7f,3S?{1b:8R}:{Y:8R},I,\'8S\');8l.G.1o=2O<0?\'3X\':\'1E\';8M.G.1o=(2O>5j)?\'3X\':\'1E\'};A 5I=m.4U.3i[m.16[1p.4k].2N||\'1E\'],1r=1p.2D,5k=1r.5k||\'bV\',8K=(5k==\'en\'),4f=8K?[\'P\',\'6t\',\'1H\',\'1C\']:[\'2g\',\'4G\',\'47\',\'2J\'],3S=(5k==\'bV\'),4E=m.1d(\'P\',{1c:\'K-2D K-2D-\'+5k,2d:\'<P 1W="K-2D-eg">\'+\'<\'+4f[0]+\'><\'+4f[1]+\'></\'+4f[1]+\'></\'+4f[0]+\'></P>\'+\'<P 1W="K-28-1I"><P></P></P>\'+\'<P 1W="K-28-ee"><P></P></P>\'+\'<P 1W="K-7f"><P></P></P>\'},{1o:\'1E\'},m.2b),5E=4E.7L,P=5E[0],8l=5E[1],8M=5E[2],7f=5E[3],2g=P.ef,4G=4E.2C(4f[1])[0],47;O(A i=0;i<5I.V;i++){q(i==0||!3S)47=m.1d(4f[2],I,I,4G);(C(){A a=5I[i],48=m.1d(4f[3],I,I,47),ex=i;m.1d(\'a\',{21:a.21,24:a.24,2p:C(){q(/K-4I-46/.11(k.1c))E 1j;m.2G(k).3M();E m.8N(a)},2d:m.bT?m.bT(a):a.2d},I,48)})()}q(!8K){8l.2p=C(){28(-1)};8M.2p=C(){28(1)};m.2j(4G,W.eA!==1L?\'er\':\'eq\',C(e){A 3K=0;e=e||1S.2u;q(e.bU){3K=e.bU/dR;q(m.3z)3K=-3K}J q(e.bZ){3K=-e.bZ/3}q(3K)28(-3K*0.2);q(e.5n)e.5n();e.c0=1j})}E{7p:7p,5t:5t}};m.7o=m.18;A e8=m.5A;q(m.2h&&1S==1S.Y){(C(){1t{W.5h.e4(\'1b\')}1y(e){4a(c5.dZ,50);E}m.41()})()}m.2j(W,\'dW\',m.41);m.2j(1S,\'8B\',m.41);m.2j(W,\'41\',C(){q(m.7R||m.4b){A G=m.1d(\'G\',{T:\'e0/8I\'},I,W.2C(\'e1\')[0]),8E=W.7a==\'8v\';C 5P(8m,8n){q(m.2h&&(m.2t<9||8E)){A 1i=W.c6[W.c6.V-1];q(1F(1i.5P)=="7j")1i.5P(8m,8n)}J{G.1X(W.e6(8m+" {"+8n+"}"))}}C 5T(1f){E\'e5( ( ( ez = W.5h.\'+1f+\' ? W.5h.\'+1f+\' : W.19.\'+1f+\' ) ) + \\\'F\\\' );\'}q(m.7R)5P(\'.K 1N\',\'4L: 7T(\'+m.5c+m.7R+\'), 7Q !dA;\');5P(\'.K-2x-D\',m.2h&&(m.2t<7||8E)?\'1l: 2l; \'+\'1b:\'+5T(\'5O\')+\'Y:\'+5T(\'5R\')+\'L:\'+5T(\'8F\')+\'N:\'+5T(\'c4\'):\'1l: fV; L: 2w%; N: 2w%; 1b: 0; Y: 0\')}});m.2j(1S,\'3O\',C(){m.7S();q(m.2x)O(A i=0;i<m.2x.7L.V;i++){A 1P=m.2x.7L[i],B=m.2G(1P);B.5V(1P);q(1P.22==\'2D\')B.1p.2D.5t()}});m.2j(W,\'7D\',C(e){m.7B={x:e.7A,y:e.7F}});m.2j(W,\'8y\',m.8z);m.2j(W,\'c3\',m.8z);m.2j(W,\'41\',m.c1);m.2j(1S,\'8B\',m.c2);m.2j(1S,\'8B\',m.bI)}', 62, 1006, '||||||||||||||||||||this||hs||||if||||||||||var|exp|function|size|return|px|style|pos|null|else|highslide|width|true|height|for|div|key|setStyles|content|type|wrapper|length|document||top|get||test|||overlay||expanders||lang|body|full|left|className|createElement|src|prop|outline|Math|last|false|iframe|position|els|visibility|display|slideshow|hidden|options|innerContent|try|dim|id|offset|overlayBox|catch|opacity|fireEvent|zIndex|span|next|none|typeof|p1|li|up|new|tpos|undefined|auto|img|offsetWidth|node|btn|ss|window|overlays|offsetHeight|imgSize|class|appendChild|visible|outlineType||href|hsId|parentNode|title||close||scroll|params|arr|container|case|innerHTML|overflow|wsize|table|ie|to|addEventListener|replace|absolute|re|op|push|onclick|upcoming|loading|scrollerDiv|uaVersion|event|dimmer|100|viewport|dragArgs|animate|isHtml|doc|getElementsByTagName|thumbstrip|isImage|expand|getExpander|args|objectType|td|imgPad|target|ratio|slideshowGroup|tblPos|tgt|easing|image|hiddenBy|justify|minSize|xhr|ajax|controls|in|name|elem|min||||contentType|p2||||previous|match|sg|focusKey|round|xSize|lastY|xpos|groups|val|wh|ucwh|right|lastX|marginMin|pause|transitions|ypos|tb|useBox|move|pThis|clearing|swf|ySize|opera|extend|discardElement|opt|html|custom|onLoad|number|parseInt|hasDragged|tagName|delta|play|focus|elPos|resize|step|func|ieLt9|isX|changed|objectLoadTime|graphic|releaseMask|block|outlineWhileAnimating|ieLt7||ready|autoplay|getParam|xp1|yp1|anchor|tr|cell|styles|setTimeout|dimmingOpacity|mediumContent|marginTop|crossfade|tree|page|duration|dur|objectWidth|expKey|attribs|timers|pendingOutlines|now|getElementByClass|clone|blurExp|minWidth|max|enable|9999px|unit|objectHeight|relative|removeEventListener|navigator|invPos|setPosition|preserveContent|dom|zIndexCounter|tbody|tgtArr|active|getNode|clientSize|cursor|safari|onload|createOverlay|overlayId|bottom|sleeping|marginMax|start|anchors|offsetLeft|marginLeft|center|RegExp|images||end|scrollingContent|relToVP|styleRestoreCursor|isExpanded|htmls|sizeOverlayBox|heading|doShowHide|cacheBindings|hDiff|graphicsDir|disable|fitsize|cNode|while|documentElement|wDiff|minTblPos|mode|fadeBox|break|preventDefault|ruler|Id|cur|owner|allowReduce|selectThumb|moveOnly|area|prototype|minX|currentStyle|maxY|Expander|minY|iDoc|afterClose|domCh|setAttribute|toLowerCase|maxX|group|cloneNode|ysize|xsize|trans|above|scrollLeft|addRule|filter|scrollTop|padToMinWidth|fix|destroy|positionOverlay|fac|stl|allowSizeReduction|250|before|idCounter|isClosing|iebody|preloadTheseImages|on|over|credits|keyHandler|contentLoaded|getParams|param|parent|userAgent|opos|loadHTML|contentWindow|restoreCursor|obj|buttons|minHeight|numberPosition|uclt|showLoading|curTblPos|getAnchors|all|Outline|mask|ul|slideshows|matches|fade|after|geckoMac|cache|Dimension|showHideElements|maincontent|onLoadStarted|kdeBugCorr|wrapperKey|oDiv|dragHandler|afterExpand|allowWidthReduction|getPosition|marginBottom|maxWidth|tId|offY|cancelLoading|thumbsUserSetId|hsKey|ximgPad|writeExtendedContent|keypress|yimgPad|expandDuration|allowHeightReduction|lt|dir||keydown|setSize|525|offX||complete|isHsAnchor|destroyOverlays|getTime|compatMode|rel|self|hideOnMouseOut|overlayWidth|marker|curAnim|expOnly|gotoEnd|object|cachedGets|onReady|init|topmostKey|langDefaults|add|preloadTheseAjax|doFullExpand|getSrc|pre|fullExpandLabel|getAnchorIndex|disabled|Ajax|element|adj|clientX|mouse|preloadFullImage|mousemove|below|clientY|split|regBody|os|DIV|Date|childNodes|panel|imgs|previousOrNext|relatedTarget|pointer|expandCursor|getPageSize|url|current|getAdjacentAnchor|cacheAjax|activeLeft|activeRight|htmlGetSize|scrollBy|pixDimmerSize|update|Slideshow|isNew|location|getCacheBinding|dimmingDuration|contentId|getSelfRendered|calcBorders|replaceLang|clones|topZ|swfOptions|types|oPos|calcExpanded|skin|Text|preloadAjaxElement|scrollUp|sel|dec|other|getIframePageHeight|endOff|startOff|previousTitle|names|from|BackCompat|arrow|fitOverlayBox|mousedown|mouseClickHandler|correctIframeSize|load|hasMovedMin|maxsize|backCompat|clientWidth|Click|border|css|parseFloat|floatMode|defaultView|scrollDown|transit|offsetTop|mY|mX|markerPos|easeOutQuad|yp2|xp2|moveTitle|nextText|nextTitle|previousText|moveText|closeTitle|setObjContainerSize|closeText|props|padding|updateAnchors|state|cssDirection|doWrapper||middle|changeSize|startTime|parOff|sizeDiff|numberOfImagesToPreload|distance|resizeTo|maxHeight|form|srcElement|allowMultipleInstances|moveTo|align|error|swfobject|removeChild|run|done|background|htmlExpand|loadingPosXfade|openerTagNames|undim|garbageBin|onError|restoreDuration|marginRight|mouseIsOver|margin|ie6|isReady|hasAlphaImageLoader|Create|connectOutline|blur|evt|ucrb|calcThumb|origProp|contentDocument|thumbnailId|getElementById|osize|direction|loadingPos|getWrapperKey|genOverlayBox|restoreTitle|caption|abs|fullExpandTitle|initSlideshow|continuePreloading|getInline|getElementContent|overrides|show|hasFocused|dragByHeading|string|wrapperClassName|setPos|playText|pauseText|pauseTitle|fullExpandText|timerId|Move|Pause|preloadGraphic|spacebar|png|Play|Close|Highslide|JS|_default|Previous|appendTo||KDE|playTitle|vendor|200|call|Next|onGraphicLoad|and|vis|targetY|hasExtendedContent|pow|attributes|flashvars|isUnobtrusiveAnchor|hsHasSetClick|clear|ltr|newHeight|detachEvent|wmode|clickY|wrapperMouseHandler|focusTopmost|dimmingGeckoFix|enableKeyListener|fixedControls|hasHtmlExpanders|clickX|thumb|pageOrigin|loadingTitle|loadingText|resizeTitle|targetX|headingOverlay|captionOverlay|htmlSizeOperations|rb|switch|orig|getImageMapAreaCorrection|rv|tag|offsetParent|both|contentWrapper|loadingOpacity|pageXOffset|alpha|nopad|toUpperCase|easeInQuad|hide|clearsX|doPanels|showOverlays|gotOverlays|writeCredits|getNumber|showCredits|createFullExpand|javascript|ActiveXObject|Microsoft|reOrder|sleep||fullExpandPosition|fullExpandOpacity|getOverlays|rightpanel|focusTitle|hand|indexOf|clearsY|getAttribute|preloadAjax|htmlPrepareClose|destroyObject|offsetY|leftpanel|offsetX|relativeTo|awake|reuseOverlay|XMLHTTP|readyState|stripItemFormatter|wheelDelta|horizontal|Height|Bottom|Width|detail|returnValue|setClickEvents|preloadImages|mouseup|clientHeight|arguments|styleSheets|Right|Top|gi|open||script|cachedGet|setRequestHeader|ie6SSL|getControls|checkFirstAndLast|Thumbstrip|Left|wait|hitSpace|repeat|sls|getPropertyValue|XMLHttpRequest|creditsText|creditsTitle|creditsTarget|creditsHref|onHideLoading|creditsPosition|Eval|Overlay|addOverlay|nextSibling|_|overlayOptions|toString|fadeInOut|transitionDuration|easingClose|correctRatio|tmpMin|ximgSize|yimgSize|getComputedStyle|prepareNextOutline|newImg|oldImg|hideSelects|preloadNext|hideIframes|scrollWidth|reuse|iPod|iPhone|scrollHeight|boolean|dynamicallyUpdateAnchors|1001|useControls|geckodimmer|onAfterExpand|iPad|onDimmerClick|htmlCreate|onShowLoading|rect|clip|nodeName|clearTimeout|onBeforeGetContent|ig|dimming|IFRAME|300|Android|write|xpand|link|htmlE|Line|lineNumber|floor|responseText|onDrop|oncontextmenu|alert|onImageClick|button|addSlideshow|registerOverlay|zoomin|graphics|zoomout|keyCode|onKeyDown|important|keys|click|message|drag|Use|insertBefore|flushImgSize|headingText|headingEval|headingId|captionEval|captionText|maincontentId|maincontentText|Trident|it|120|reflow|maincontentEval|captionId|shadow|DOMContentLoaded|||callee|text|HEAD|header|blockRightClick|doScroll|expression|createTextNode|footer|HsExpander|ra|Safari|useMap|_self|pageYOffset|down|firstChild|inner|com|outlineStartOffset|mgnRight|onSetClickEvent||http|float|innerHeight|innerWidth|DOMMouseScroll|mousewheel|Gecko|onBeforeExpand|Macintosh|drop|removeAttribute|pI|imageCreate|ignoreMe|onmousewheel|white|blank|esc|onAfterGetCaption|onAfterGetHeading|onBeforeGetHeading|onBeforeGetCaption|circle|cellSpacing|fontSize|lineHeight|collapse|borderCollapse|useOnHtml|newWidth|frameborder|front|onmouseout|clearInterval|01|onBeforeClose|onBlur|onmouseover|Resize|Expand|fit|outlinesDir|200px|onInit|Go|allowSimultaneousLoading|the|onCreateOverlay|Powered|StopPlay|static|removeSWF|actual|onFocus|scale|shape|homepage|eval|outlines|default|SELECT|sizingMethod|AlphaImageLoader|DXImageTransform|progid|onAfterGetContent|onCreateFullExpand|onMouseOut|500|onMouseOver|Content|Type|Loading||attachEvent|of|Requested|With|coords|toElement|fromElement|send|sqrt|interval|about|urlencoded|dragSensitivity|application|mouseover|onDrag|www|cancel|GET|transparent|Msxml2|embedSWF|onActivate|fixed|onAfterClose|setInterval|flash|onDoFullExpand|bring|version|linearTween|forceAjaxReload|https|protocol|dummy|Image|debug|paddingTop|1px|expressInstallSwfurl|onreadystatechange|splice'.split('|'), 0, {}))

  /**
   * BxSlider v4.1.1 - Fully loaded, responsive content slider
   * http://bxslider.com
   *
   * Copyright 2013, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
   * Written while drinking Belgian ales and listening to jazz
   *
   * Released under the MIT license - http://opensource.org/licenses/MIT
   */
  ! function (t) {
    var e = {},
      s = {
        mode: "horizontal",
        slideSelector: "",
        infiniteLoop: !0,
        hideControlOnEnd: !1,
        speed: 500,
        easing: null,
        slideMargin: 0,
        startSlide: 0,
        randomStart: !1,
        captions: !1,
        ticker: !1,
        tickerHover: !1,
        adaptiveHeight: !1,
        adaptiveHeightSpeed: 500,
        video: !1,
        useCSS: !0,
        preloadImages: "visible",
        responsive: !0,
        touchEnabled: !0,
        swipeThreshold: 50,
        oneToOneTouch: !0,
        preventDefaultSwipeX: !0,
        preventDefaultSwipeY: !1,
        pager: !0,
        pagerType: "full",
        pagerShortSeparator: " / ",
        pagerSelector: null,
        buildPager: null,
        pagerCustom: null,
        controls: !0,
        nextText: "Next",
        prevText: "Prev",
        nextSelector: null,
        prevSelector: null,
        autoControls: !1,
        startText: "Start",
        stopText: "Stop",
        autoControlsCombine: !1,
        autoControlsSelector: null,
        auto: !1,
        pause: 4e3,
        autoStart: !0,
        autoDirection: "next",
        autoHover: !1,
        autoDelay: 0,
        minSlides: 1,
        maxSlides: 1,
        moveSlides: 0,
        slideWidth: 0,
        onSliderLoad: function () {},
        onSlideBefore: function () {},
        onSlideAfter: function () {},
        onSlideNext: function () {},
        onSlidePrev: function () {}
      };
    t.fn.bxSlider = function (n) {
      if (0 == this.length) return this;
      if (this.length > 1) return this.each(function () {
        t(this).bxSlider(n)
      }), this;
      var o = {},
        r = this;
      e.el = this;
      var a = t(window).width(),
        l = t(window).height(),
        d = function () {
          o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
            index: o.settings.startSlide
          }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function () {
            var t = document.createElement("div"),
              e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
            for (var i in e)
              if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
            return !1
          }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function () {
            t(this).data("origStyle", t(this).attr("style"))
          }), c()
        },
        c = function () {
          r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
            width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
            position: "relative"
          }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({
            width: "100%",
            overflow: "hidden",
            position: "relative"
          }), o.viewport.parent().css({
            maxWidth: v()
          }), o.settings.pager || o.viewport.parent().css({
            margin: "0 auto 0px"
          }), o.children.css({
            "float": "horizontal" == o.settings.mode ? "left" : "none",
            listStyle: "none",
            position: "relative"
          }), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
            position: "absolute",
            zIndex: 0,
            display: "none"
          }), o.children.eq(o.settings.startSlide).css({
            zIndex: 50,
            display: "block"
          })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids();
          var e = o.children.eq(o.settings.startSlide);
          "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)
        },
        g = function (e, i) {
          var s = e.find("img, iframe").length;
          if (0 == s) return i(), void 0;
          var n = 0;
          e.find("img, iframe").each(function () {
            t(this).one("load", function () {
              ++n == s && i()
            }).each(function () {
              this.complete && t(this).load()
            })
          })
        },
        h = function () {
          if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
            var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
              i = o.children.slice(0, e).clone().addClass("bx-clone"),
              s = o.children.slice(-e).clone().addClass("bx-clone");
            r.append(i).prepend(s)
          }
          o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(p()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", B), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && I(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O()
        },
        p = function () {
          var e = 0,
            s = t();
          if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
            if (o.carousel) {
              var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
              for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
            } else s = o.children.eq(o.active.index);
          else s = o.children;
          return "vertical" == o.settings.mode ? (s.each(function () {
            e += t(this).outerHeight()
          }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function () {
            return t(this).outerHeight(!1)
          }).get()), e
        },
        v = function () {
          var t = "100%";
          return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
        },
        u = function () {
          var t = o.settings.slideWidth,
            e = o.viewport.width();
          return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
        },
        f = function () {
          var t = 1;
          if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
            if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides;
            else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
          else {
            var e = o.children.first().width();
            t = Math.floor(o.viewport.width() / e)
          } else "vertical" == o.settings.mode && (t = o.settings.minSlides);
          return t
        },
        x = function () {
          var t = 0;
          if (o.settings.moveSlides > 0)
            if (o.settings.infiniteLoop) t = o.children.length / m();
            else
              for (var e = 0, i = 0; e < o.children.length;) ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
          else t = Math.ceil(o.children.length / f());
          return t
        },
        m = function () {
          return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
        },
        S = function () {
          if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
            if ("horizontal" == o.settings.mode) {
              var t = o.children.last(),
                e = t.position();
              b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
            } else if ("vertical" == o.settings.mode) {
              var i = o.children.length - o.settings.minSlides,
                e = o.children.eq(i).position();
              b(-e.top, "reset", 0)
            }
          } else {
            var e = o.children.eq(o.active.index * m()).position();
            o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
          }
        },
        b = function (t, e, i, s) {
          if (o.usingCSS) {
            var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
            r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
              r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
            })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
              r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N()
            }))
          } else {
            var a = {};
            a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function () {
              D()
            }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function () {
              b(s.resetValue, "reset", 0), N()
            })
          }
        },
        w = function () {
          for (var e = "", i = x(), s = 0; i > s; s++) {
            var n = "";
            o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
          }
          o.pagerEl.html(e)
        },
        T = function () {
          o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.delegate("a", "click", q)
        },
        C = function () {
          o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
        },
        E = function () {
          o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.delegate(".bx-start", "click", k), o.controls.autoEl.delegate(".bx-stop", "click", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start")
        },
        P = function () {
          o.children.each(function () {
            var e = t(this).find("img:first").attr("title");
            void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
          })
        },
        y = function (t) {
          o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
        },
        z = function (t) {
          o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
        },
        k = function (t) {
          r.startAuto(), t.preventDefault()
        },
        M = function (t) {
          r.stopAuto(), t.preventDefault()
        },
        q = function (e) {
          o.settings.auto && r.stopAuto();
          var i = t(e.currentTarget),
            s = parseInt(i.attr("data-slide-index"));
          s != o.active.index && r.goToSlide(s), e.preventDefault()
        },
        I = function (e) {
          var i = o.children.length;
          return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function (i, s) {
            t(s).find("a").eq(e).addClass("active")
          }), void 0)
        },
        D = function () {
          if (o.settings.infiniteLoop) {
            var t = "";
            0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), "horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0)
          }
          o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
        },
        A = function (t) {
          o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
        },
        W = function () {
          1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
        },
        H = function () {
          o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function () {
            o.interval && (r.stopAuto(!0), o.autoPaused = !0)
          }, function () {
            o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
          })
        },
        L = function () {
          var e = 0;
          if ("next" == o.settings.autoDirection) r.append(o.children.clone().addClass("bx-clone"));
          else {
            r.prepend(o.children.clone().addClass("bx-clone"));
            var i = o.children.first().position();
            e = "horizontal" == o.settings.mode ? -i.left : -i.top
          }
          b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function () {
            r.stop()
          }, function () {
            var e = 0;
            o.children.each(function () {
              e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
            });
            var i = o.settings.speed / e,
              s = "horizontal" == o.settings.mode ? "left" : "top",
              n = i * (e - Math.abs(parseInt(r.css(s))));
            N(n)
          }), N()
        },
        N = function (t) {
          speed = t ? t : o.settings.speed;
          var e = {
              left: 0,
              top: 0
            },
            i = {
              left: 0,
              top: 0
            };
          "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
          var s = "horizontal" == o.settings.mode ? -e.left : -e.top,
            n = "horizontal" == o.settings.mode ? -i.left : -i.top,
            a = {
              resetValue: n
            };
          b(s, "ticker", speed, a)
        },
        O = function () {
          o.touch = {
            start: {
              x: 0,
              y: 0
            },
            end: {
              x: 0,
              y: 0
            }
          }, o.viewport.bind("touchstart", X)
        },
        X = function (t) {
          if (o.working) t.preventDefault();
          else {
            o.touch.originalPos = r.position();
            var e = t.originalEvent;
            o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)
          }
        },
        Y = function (t) {
          var e = t.originalEvent,
            i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
            s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
          if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
            var n = 0;
            if ("horizontal" == o.settings.mode) {
              var r = e.changedTouches[0].pageX - o.touch.start.x;
              n = o.touch.originalPos.left + r
            } else {
              var r = e.changedTouches[0].pageY - o.touch.start.y;
              n = o.touch.originalPos.top + r
            }
            b(n, "reset", 0)
          }
        },
        V = function (t) {
          o.viewport.unbind("touchmove", Y);
          var e = t.originalEvent,
            i = 0;
          if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
            var s = Math.abs(o.touch.start.x - o.touch.end.x);
            s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
          } else {
            var s = 0;
            "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200)
          }
          o.viewport.unbind("touchend", V)
        },
        B = function () {
          var e = t(window).width(),
            i = t(window).height();
          (a != e || l != i) && (a = e, l = i, r.redrawSlider())
        };
      return r.goToSlide = function (e, i) {
        if (!o.working && o.active.index != e)
          if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && I(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != p() && o.viewport.animate({
            height: p()
          }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
            zIndex: 0
          }), o.children.eq(o.active.index).css("zIndex", 51).fadeIn(o.settings.speed, function () {
            t(this).css("zIndex", 50), D()
          });
          else {
            o.settings.adaptiveHeight && o.viewport.height() != p() && o.viewport.animate({
              height: p()
            }, o.settings.adaptiveHeightSpeed);
            var s = 0,
              n = {
                left: 0,
                top: 0
              };
            if (!o.settings.infiniteLoop && o.carousel && o.active.last)
              if ("horizontal" == o.settings.mode) {
                var a = o.children.eq(o.children.length - 1);
                n = a.position(), s = o.viewport.width() - a.outerWidth()
              } else {
                var l = o.children.length - o.settings.minSlides;
                n = o.children.eq(l).position()
              }
            else if (o.carousel && o.active.last && "prev" == i) {
              var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),
                a = r.children(".bx-clone").eq(d);
              n = a.position()
            } else if ("next" == i && 0 == o.active.index) n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
            else if (e >= 0) {
              var c = e * m();
              n = o.children.eq(c).position()
            }
            if ("undefined" != typeof n) {
              var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
              b(g, "slide", o.settings.speed)
            }
          }
      }, r.goToNextSlide = function () {
        if (o.settings.infiniteLoop || !o.active.last) {
          var t = parseInt(o.active.index) + 1;
          r.goToSlide(t, "next")
        }
      }, r.goToPrevSlide = function () {
        if (o.settings.infiniteLoop || 0 != o.active.index) {
          var t = parseInt(o.active.index) - 1;
          r.goToSlide(t, "prev")
        }
      }, r.startAuto = function (t) {
        o.interval || (o.interval = setInterval(function () {
          "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
        }, o.settings.pause), o.settings.autoControls && 1 != t && A("stop"))
      }, r.stopAuto = function (t) {
        o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start"))
      }, r.getCurrentSlide = function () {
        return o.active.index
      }, r.getSlideCount = function () {
        return o.children.length
      }, r.redrawSlider = function () {
        o.children.add(r.find(".bx-clone")).outerWidth(u()), o.viewport.css("height", p()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), I(o.active.index))
      }, r.destroySlider = function () {
        o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function () {
          void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
        }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", B))
      }, r.reloadSlider = function (t) {
        void 0 != t && (n = t), r.destroySlider(), d()
      }, d(), this
    }
  }(jQuery);

/*!
 DataTables 1.10.13
 ©2008-2016 SpryMedia Ltd - datatables.net/license
*/
(function (h) {
  "function" === typeof define && define.amd ? define(["jquery"], function (E) {
    return h(E, window, document)
  }) : "object" === typeof exports ? module.exports = function (E, H) {
    E || (E = window);
    H || (H = "undefined" !== typeof window ? require("jquery") : require("jquery")(E));
    return h(H, E, E.document)
  } : h(jQuery, window, document)
})(function (h, E, H, k) {
  function Y(a) {
    var b, c, d = {};
    h.each(a, function (e) {
      if ((b = e.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(b[1] + " ")) c = e.replace(b[0], b[2].toLowerCase()),
        d[c] = e, "o" === b[1] && Y(a[e])
    });
    a._hungarianMap = d
  }

  function J(a, b, c) {
    a._hungarianMap || Y(a);
    var d;
    h.each(b, function (e) {
      d = a._hungarianMap[e];
      if (d !== k && (c || b[d] === k)) "o" === d.charAt(0) ? (b[d] || (b[d] = {}), h.extend(!0, b[d], b[e]), J(a[d], b[d], c)) : b[d] = b[e]
    })
  }

  function Fa(a) {
    var b = m.defaults.oLanguage,
      c = a.sZeroRecords;
    !a.sEmptyTable && (c && "No data available in table" === b.sEmptyTable) && F(a, a, "sZeroRecords", "sEmptyTable");
    !a.sLoadingRecords && (c && "Loading..." === b.sLoadingRecords) && F(a, a, "sZeroRecords", "sLoadingRecords");
    a.sInfoThousands && (a.sThousands = a.sInfoThousands);
    (a = a.sDecimal) && fb(a)
  }

  function gb(a) {
    A(a, "ordering", "bSort");
    A(a, "orderMulti", "bSortMulti");
    A(a, "orderClasses", "bSortClasses");
    A(a, "orderCellsTop", "bSortCellsTop");
    A(a, "order", "aaSorting");
    A(a, "orderFixed", "aaSortingFixed");
    A(a, "paging", "bPaginate");
    A(a, "pagingType", "sPaginationType");
    A(a, "pageLength", "iDisplayLength");
    A(a, "searching", "bFilter");
    "boolean" === typeof a.sScrollX && (a.sScrollX = a.sScrollX ? "100%" : "");
    "boolean" === typeof a.scrollX && (a.scrollX =
      a.scrollX ? "100%" : "");
    if (a = a.aoSearchCols)
      for (var b = 0, c = a.length; b < c; b++) a[b] && J(m.models.oSearch, a[b])
  }

  function hb(a) {
    A(a, "orderable", "bSortable");
    A(a, "orderData", "aDataSort");
    A(a, "orderSequence", "asSorting");
    A(a, "orderDataType", "sortDataType");
    var b = a.aDataSort;
    b && !h.isArray(b) && (a.aDataSort = [b])
  }

  function ib(a) {
    if (!m.__browser) {
      var b = {};
      m.__browser = b;
      var c = h("<div/>").css({
          position: "fixed",
          top: 0,
          left: -1 * h(E).scrollLeft(),
          height: 1,
          width: 1,
          overflow: "hidden"
        }).append(h("<div/>").css({
          position: "absolute",
          top: 1,
          left: 1,
          width: 100,
          overflow: "scroll"
        }).append(h("<div/>").css({
          width: "100%",
          height: 10
        }))).appendTo("body"),
        d = c.children(),
        e = d.children();
      b.barWidth = d[0].offsetWidth - d[0].clientWidth;
      b.bScrollOversize = 100 === e[0].offsetWidth && 100 !== d[0].clientWidth;
      b.bScrollbarLeft = 1 !== Math.round(e.offset().left);
      b.bBounding = c[0].getBoundingClientRect().width ? !0 : !1;
      c.remove()
    }
    h.extend(a.oBrowser, m.__browser);
    a.oScroll.iBarWidth = m.__browser.barWidth
  }

  function jb(a, b, c, d, e, f) {
    var g, j = !1;
    c !== k && (g = c, j = !0);
    for (; d !==
      e;) a.hasOwnProperty(d) && (g = j ? b(g, a[d], d, a) : a[d], j = !0, d += f);
    return g
  }

  function Ga(a, b) {
    var c = m.defaults.column,
      d = a.aoColumns.length,
      c = h.extend({}, m.models.oColumn, c, {
        nTh: b ? b : H.createElement("th"),
        sTitle: c.sTitle ? c.sTitle : b ? b.innerHTML : "",
        aDataSort: c.aDataSort ? c.aDataSort : [d],
        mData: c.mData ? c.mData : d,
        idx: d
      });
    a.aoColumns.push(c);
    c = a.aoPreSearchCols;
    c[d] = h.extend({}, m.models.oSearch, c[d]);
    la(a, d, h(b).data())
  }

  function la(a, b, c) {
    var b = a.aoColumns[b],
      d = a.oClasses,
      e = h(b.nTh);
    if (!b.sWidthOrig) {
      b.sWidthOrig =
        e.attr("width") || null;
      var f = (e.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
      f && (b.sWidthOrig = f[1])
    }
    c !== k && null !== c && (hb(c), J(m.defaults.column, c), c.mDataProp !== k && !c.mData && (c.mData = c.mDataProp), c.sType && (b._sManualType = c.sType), c.className && !c.sClass && (c.sClass = c.className), h.extend(b, c), F(b, c, "sWidth", "sWidthOrig"), c.iDataSort !== k && (b.aDataSort = [c.iDataSort]), F(b, c, "aDataSort"));
    var g = b.mData,
      j = R(g),
      i = b.mRender ? R(b.mRender) : null,
      c = function (a) {
        return "string" === typeof a && -1 !== a.indexOf("@")
      };
    b._bAttrSrc = h.isPlainObject(g) && (c(g.sort) || c(g.type) || c(g.filter));
    b._setter = null;
    b.fnGetData = function (a, b, c) {
      var d = j(a, b, k, c);
      return i && b ? i(d, b, a, c) : d
    };
    b.fnSetData = function (a, b, c) {
      return S(g)(a, b, c)
    };
    "number" !== typeof g && (a._rowReadObject = !0);
    a.oFeatures.bSort || (b.bSortable = !1, e.addClass(d.sSortableNone));
    a = -1 !== h.inArray("asc", b.asSorting);
    c = -1 !== h.inArray("desc", b.asSorting);
    !b.bSortable || !a && !c ? (b.sSortingClass = d.sSortableNone, b.sSortingClassJUI = "") : a && !c ? (b.sSortingClass = d.sSortableAsc, b.sSortingClassJUI =
      d.sSortJUIAscAllowed) : !a && c ? (b.sSortingClass = d.sSortableDesc, b.sSortingClassJUI = d.sSortJUIDescAllowed) : (b.sSortingClass = d.sSortable, b.sSortingClassJUI = d.sSortJUI)
  }

  function Z(a) {
    if (!1 !== a.oFeatures.bAutoWidth) {
      var b = a.aoColumns;
      Ha(a);
      for (var c = 0, d = b.length; c < d; c++) b[c].nTh.style.width = b[c].sWidth
    }
    b = a.oScroll;
    ("" !== b.sY || "" !== b.sX) && ma(a);
    s(a, null, "column-sizing", [a])
  }

  function $(a, b) {
    var c = na(a, "bVisible");
    return "number" === typeof c[b] ? c[b] : null
  }

  function aa(a, b) {
    var c = na(a, "bVisible"),
      c = h.inArray(b,
        c);
    return -1 !== c ? c : null
  }

  function ba(a) {
    var b = 0;
    h.each(a.aoColumns, function (a, d) {
      d.bVisible && "none" !== h(d.nTh).css("display") && b++
    });
    return b
  }

  function na(a, b) {
    var c = [];
    h.map(a.aoColumns, function (a, e) {
      a[b] && c.push(e)
    });
    return c
  }

  function Ia(a) {
    var b = a.aoColumns,
      c = a.aoData,
      d = m.ext.type.detect,
      e, f, g, j, i, h, l, q, r;
    e = 0;
    for (f = b.length; e < f; e++)
      if (l = b[e], r = [], !l.sType && l._sManualType) l.sType = l._sManualType;
      else if (!l.sType) {
      g = 0;
      for (j = d.length; g < j; g++) {
        i = 0;
        for (h = c.length; i < h; i++) {
          r[i] === k && (r[i] = B(a, i, e, "type"));
          q = d[g](r[i], a);
          if (!q && g !== d.length - 1) break;
          if ("html" === q) break
        }
        if (q) {
          l.sType = q;
          break
        }
      }
      l.sType || (l.sType = "string")
    }
  }

  function kb(a, b, c, d) {
    var e, f, g, j, i, n, l = a.aoColumns;
    if (b)
      for (e = b.length - 1; 0 <= e; e--) {
        n = b[e];
        var q = n.targets !== k ? n.targets : n.aTargets;
        h.isArray(q) || (q = [q]);
        f = 0;
        for (g = q.length; f < g; f++)
          if ("number" === typeof q[f] && 0 <= q[f]) {
            for (; l.length <= q[f];) Ga(a);
            d(q[f], n)
          } else if ("number" === typeof q[f] && 0 > q[f]) d(l.length + q[f], n);
        else if ("string" === typeof q[f]) {
          j = 0;
          for (i = l.length; j < i; j++)("_all" == q[f] || h(l[j].nTh).hasClass(q[f])) &&
            d(j, n)
        }
      }
    if (c) {
      e = 0;
      for (a = c.length; e < a; e++) d(e, c[e])
    }
  }

  function N(a, b, c, d) {
    var e = a.aoData.length,
      f = h.extend(!0, {}, m.models.oRow, {
        src: c ? "dom" : "data",
        idx: e
      });
    f._aData = b;
    a.aoData.push(f);
    for (var g = a.aoColumns, j = 0, i = g.length; j < i; j++) g[j].sType = null;
    a.aiDisplayMaster.push(e);
    b = a.rowIdFn(b);
    b !== k && (a.aIds[b] = f);
    (c || !a.oFeatures.bDeferRender) && Ja(a, e, c, d);
    return e
  }

  function oa(a, b) {
    var c;
    b instanceof h || (b = h(b));
    return b.map(function (b, e) {
      c = Ka(a, e);
      return N(a, c.data, e, c.cells)
    })
  }

  function B(a, b, c, d) {
    var e = a.iDraw,
      f = a.aoColumns[c],
      g = a.aoData[b]._aData,
      j = f.sDefaultContent,
      i = f.fnGetData(g, d, {
        settings: a,
        row: b,
        col: c
      });
    if (i === k) return a.iDrawError != e && null === j && (K(a, 0, "Requested unknown parameter " + ("function" == typeof f.mData ? "{function}" : "'" + f.mData + "'") + " for row " + b + ", column " + c, 4), a.iDrawError = e), j;
    if ((i === g || null === i) && null !== j && d !== k) i = j;
    else if ("function" === typeof i) return i.call(g);
    return null === i && "display" == d ? "" : i
  }

  function lb(a, b, c, d) {
    a.aoColumns[c].fnSetData(a.aoData[b]._aData, d, {
      settings: a,
      row: b,
      col: c
    })
  }

  function La(a) {
    return h.map(a.match(/(\\.|[^\.])+/g) || [""], function (a) {
      return a.replace(/\\\./g, ".")
    })
  }

  function R(a) {
    if (h.isPlainObject(a)) {
      var b = {};
      h.each(a, function (a, c) {
        c && (b[a] = R(c))
      });
      return function (a, c, f, g) {
        var j = b[c] || b._;
        return j !== k ? j(a, c, f, g) : a
      }
    }
    if (null === a) return function (a) {
      return a
    };
    if ("function" === typeof a) return function (b, c, f, g) {
      return a(b, c, f, g)
    };
    if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
      var c = function (a, b, f) {
        var g, j;
        if ("" !== f) {
          j = La(f);
          for (var i = 0, n = j.length; i < n; i++) {
            f = j[i].match(ca);
            g = j[i].match(V);
            if (f) {
              j[i] = j[i].replace(ca, "");
              "" !== j[i] && (a = a[j[i]]);
              g = [];
              j.splice(0, i + 1);
              j = j.join(".");
              if (h.isArray(a)) {
                i = 0;
                for (n = a.length; i < n; i++) g.push(c(a[i], b, j))
              }
              a = f[0].substring(1, f[0].length - 1);
              a = "" === a ? g : g.join(a);
              break
            } else if (g) {
              j[i] = j[i].replace(V, "");
              a = a[j[i]]();
              continue
            }
            if (null === a || a[j[i]] === k) return k;
            a = a[j[i]]
          }
        }
        return a
      };
      return function (b, e) {
        return c(b, e, a)
      }
    }
    return function (b) {
      return b[a]
    }
  }

  function S(a) {
    if (h.isPlainObject(a)) return S(a._);
    if (null === a) return function () {};
    if ("function" === typeof a) return function (b, d, e) {
      a(b, "set", d, e)
    };
    if ("string" === typeof a && (-1 !== a.indexOf(".") || -1 !== a.indexOf("[") || -1 !== a.indexOf("("))) {
      var b = function (a, d, e) {
        var e = La(e),
          f;
        f = e[e.length - 1];
        for (var g, j, i = 0, n = e.length - 1; i < n; i++) {
          g = e[i].match(ca);
          j = e[i].match(V);
          if (g) {
            e[i] = e[i].replace(ca, "");
            a[e[i]] = [];
            f = e.slice();
            f.splice(0, i + 1);
            g = f.join(".");
            if (h.isArray(d)) {
              j = 0;
              for (n = d.length; j < n; j++) f = {}, b(f, d[j], g), a[e[i]].push(f)
            } else a[e[i]] = d;
            return
          }
          j && (e[i] = e[i].replace(V,
            ""), a = a[e[i]](d));
          if (null === a[e[i]] || a[e[i]] === k) a[e[i]] = {};
          a = a[e[i]]
        }
        if (f.match(V)) a[f.replace(V, "")](d);
        else a[f.replace(ca, "")] = d
      };
      return function (c, d) {
        return b(c, d, a)
      }
    }
    return function (b, d) {
      b[a] = d
    }
  }

  function Ma(a) {
    return D(a.aoData, "_aData")
  }

  function pa(a) {
    a.aoData.length = 0;
    a.aiDisplayMaster.length = 0;
    a.aiDisplay.length = 0;
    a.aIds = {}
  }

  function qa(a, b, c) {
    for (var d = -1, e = 0, f = a.length; e < f; e++) a[e] == b ? d = e : a[e] > b && a[e]--; - 1 != d && c === k && a.splice(d, 1)
  }

  function da(a, b, c, d) {
    var e = a.aoData[b],
      f, g = function (c, d) {
        for (; c.childNodes.length;) c.removeChild(c.firstChild);
        c.innerHTML = B(a, b, d, "display")
      };
    if ("dom" === c || (!c || "auto" === c) && "dom" === e.src) e._aData = Ka(a, e, d, d === k ? k : e._aData).data;
    else {
      var j = e.anCells;
      if (j)
        if (d !== k) g(j[d], d);
        else {
          c = 0;
          for (f = j.length; c < f; c++) g(j[c], c)
        }
    }
    e._aSortData = null;
    e._aFilterData = null;
    g = a.aoColumns;
    if (d !== k) g[d].sType = null;
    else {
      c = 0;
      for (f = g.length; c < f; c++) g[c].sType = null;
      Na(a, e)
    }
  }

  function Ka(a, b, c, d) {
    var e = [],
      f = b.firstChild,
      g, j, i = 0,
      n, l = a.aoColumns,
      q = a._rowReadObject,
      d = d !== k ? d : q ? {} : [],
      r = function (a, b) {
        if ("string" === typeof a) {
          var c = a.indexOf("@"); -
          1 !== c && (c = a.substring(c + 1), S(a)(d, b.getAttribute(c)))
        }
      },
      m = function (a) {
        if (c === k || c === i) j = l[i], n = h.trim(a.innerHTML), j && j._bAttrSrc ? (S(j.mData._)(d, n), r(j.mData.sort, a), r(j.mData.type, a), r(j.mData.filter, a)) : q ? (j._setter || (j._setter = S(j.mData)), j._setter(d, n)) : d[i] = n;
        i++
      };
    if (f)
      for (; f;) {
        g = f.nodeName.toUpperCase();
        if ("TD" == g || "TH" == g) m(f), e.push(f);
        f = f.nextSibling
      } else {
        e = b.anCells;
        f = 0;
        for (g = e.length; f < g; f++) m(e[f])
      }
    if (b = b.firstChild ? b : b.nTr)(b = b.getAttribute("id")) && S(a.rowId)(d, b);
    return {
      data: d,
      cells: e
    }
  }

  function Ja(a, b, c, d) {
    var e = a.aoData[b],
      f = e._aData,
      g = [],
      j, i, n, l, q;
    if (null === e.nTr) {
      j = c || H.createElement("tr");
      e.nTr = j;
      e.anCells = g;
      j._DT_RowIndex = b;
      Na(a, e);
      l = 0;
      for (q = a.aoColumns.length; l < q; l++) {
        n = a.aoColumns[l];
        i = c ? d[l] : H.createElement(n.sCellType);
        i._DT_CellIndex = {
          row: b,
          column: l
        };
        g.push(i);
        if ((!c || n.mRender || n.mData !== l) && (!h.isPlainObject(n.mData) || n.mData._ !== l + ".display")) i.innerHTML = B(a, b, l, "display");
        n.sClass && (i.className += " " + n.sClass);
        n.bVisible && !c ? j.appendChild(i) : !n.bVisible && c && i.parentNode.removeChild(i);
        n.fnCreatedCell && n.fnCreatedCell.call(a.oInstance, i, B(a, b, l), f, b, l)
      }
      s(a, "aoRowCreatedCallback", null, [j, f, b])
    }
    e.nTr.setAttribute("role", "row")
  }

  function Na(a, b) {
    var c = b.nTr,
      d = b._aData;
    if (c) {
      var e = a.rowIdFn(d);
      e && (c.id = e);
      d.DT_RowClass && (e = d.DT_RowClass.split(" "), b.__rowc = b.__rowc ? sa(b.__rowc.concat(e)) : e, h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));
      d.DT_RowAttr && h(c).attr(d.DT_RowAttr);
      d.DT_RowData && h(c).data(d.DT_RowData)
    }
  }

  function mb(a) {
    var b, c, d, e, f, g = a.nTHead,
      j = a.nTFoot,
      i = 0 ===
      h("th, td", g).length,
      n = a.oClasses,
      l = a.aoColumns;
    i && (e = h("<tr/>").appendTo(g));
    b = 0;
    for (c = l.length; b < c; b++) f = l[b], d = h(f.nTh).addClass(f.sClass), i && d.appendTo(e), a.oFeatures.bSort && (d.addClass(f.sSortingClass), !1 !== f.bSortable && (d.attr("tabindex", a.iTabIndex).attr("aria-controls", a.sTableId), Oa(a, f.nTh, b))), f.sTitle != d[0].innerHTML && d.html(f.sTitle), Pa(a, "header")(a, d, f, n);
    i && ea(a.aoHeader, g);
    h(g).find(">tr").attr("role", "row");
    h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);
    h(j).find(">tr>th, >tr>td").addClass(n.sFooterTH);
    if (null !== j) {
      a = a.aoFooter[0];
      b = 0;
      for (c = a.length; b < c; b++) f = l[b], f.nTf = a[b].cell, f.sClass && h(f.nTf).addClass(f.sClass)
    }
  }

  function fa(a, b, c) {
    var d, e, f, g = [],
      j = [],
      i = a.aoColumns.length,
      n;
    if (b) {
      c === k && (c = !1);
      d = 0;
      for (e = b.length; d < e; d++) {
        g[d] = b[d].slice();
        g[d].nTr = b[d].nTr;
        for (f = i - 1; 0 <= f; f--) !a.aoColumns[f].bVisible && !c && g[d].splice(f, 1);
        j.push([])
      }
      d = 0;
      for (e = g.length; d < e; d++) {
        if (a = g[d].nTr)
          for (; f = a.firstChild;) a.removeChild(f);
        f = 0;
        for (b = g[d].length; f < b; f++)
          if (n = i = 1, j[d][f] === k) {
            a.appendChild(g[d][f].cell);
            for (j[d][f] = 1; g[d + i] !== k && g[d][f].cell == g[d + i][f].cell;) j[d + i][f] = 1, i++;
            for (; g[d][f + n] !== k && g[d][f].cell == g[d][f + n].cell;) {
              for (c = 0; c < i; c++) j[d + c][f + n] = 1;
              n++
            }
            h(g[d][f].cell).attr("rowspan", i).attr("colspan", n)
          }
      }
    }
  }

  function O(a) {
    var b = s(a, "aoPreDrawCallback", "preDraw", [a]);
    if (-1 !== h.inArray(!1, b)) C(a, !1);
    else {
      var b = [],
        c = 0,
        d = a.asStripeClasses,
        e = d.length,
        f = a.oLanguage,
        g = a.iInitDisplayStart,
        j = "ssp" == y(a),
        i = a.aiDisplay;
      a.bDrawing = !0;
      g !== k && -1 !== g && (a._iDisplayStart = j ? g : g >= a.fnRecordsDisplay() ? 0 : g, a.iInitDisplayStart = -1);
      var g = a._iDisplayStart,
        n = a.fnDisplayEnd();
      if (a.bDeferLoading) a.bDeferLoading = !1, a.iDraw++, C(a, !1);
      else if (j) {
        if (!a.bDestroying && !nb(a)) return
      } else a.iDraw++;
      if (0 !== i.length) {
        f = j ? a.aoData.length : n;
        for (j = j ? 0 : g; j < f; j++) {
          var l = i[j],
            q = a.aoData[l];
          null === q.nTr && Ja(a, l);
          l = q.nTr;
          if (0 !== e) {
            var r = d[c % e];
            q._sRowStripe != r && (h(l).removeClass(q._sRowStripe).addClass(r), q._sRowStripe = r)
          }
          s(a, "aoRowCallback", null, [l, q._aData, c, j]);
          b.push(l);
          c++
        }
      } else c = f.sZeroRecords, 1 == a.iDraw && "ajax" == y(a) ? c = f.sLoadingRecords :
        f.sEmptyTable && 0 === a.fnRecordsTotal() && (c = f.sEmptyTable), b[0] = h("<tr/>", {
          "class": e ? d[0] : ""
        }).append(h("<td />", {
          valign: "top",
          colSpan: ba(a),
          "class": a.oClasses.sRowEmpty
        }).html(c))[0];
      s(a, "aoHeaderCallback", "header", [h(a.nTHead).children("tr")[0], Ma(a), g, n, i]);
      s(a, "aoFooterCallback", "footer", [h(a.nTFoot).children("tr")[0], Ma(a), g, n, i]);
      d = h(a.nTBody);
      d.children().detach();
      d.append(h(b));
      s(a, "aoDrawCallback", "draw", [a]);
      a.bSorted = !1;
      a.bFiltered = !1;
      a.bDrawing = !1
    }
  }

  function T(a, b) {
    var c = a.oFeatures,
      d = c.bFilter;
    c.bSort && ob(a);
    d ? ga(a, a.oPreviousSearch) : a.aiDisplay = a.aiDisplayMaster.slice();
    !0 !== b && (a._iDisplayStart = 0);
    a._drawHold = b;
    O(a);
    a._drawHold = !1
  }

  function pb(a) {
    var b = a.oClasses,
      c = h(a.nTable),
      c = h("<div/>").insertBefore(c),
      d = a.oFeatures,
      e = h("<div/>", {
        id: a.sTableId + "_wrapper",
        "class": b.sWrapper + (a.nTFoot ? "" : " " + b.sNoFooter)
      });
    a.nHolding = c[0];
    a.nTableWrapper = e[0];
    a.nTableReinsertBefore = a.nTable.nextSibling;
    for (var f = a.sDom.split(""), g, j, i, n, l, q, k = 0; k < f.length; k++) {
      g = null;
      j = f[k];
      if ("<" == j) {
        i = h("<div/>")[0];
        n = f[k + 1];
        if ("'" == n || '"' == n) {
          l = "";
          for (q = 2; f[k + q] != n;) l += f[k + q], q++;
          "H" == l ? l = b.sJUIHeader : "F" == l && (l = b.sJUIFooter); - 1 != l.indexOf(".") ? (n = l.split("."), i.id = n[0].substr(1, n[0].length - 1), i.className = n[1]) : "#" == l.charAt(0) ? i.id = l.substr(1, l.length - 1) : i.className = l;
          k += q
        }
        e.append(i);
        e = h(i)
      } else if (">" == j) e = e.parent();
      else if ("l" == j && d.bPaginate && d.bLengthChange) g = qb(a);
      else if ("f" == j && d.bFilter) g = rb(a);
      else if ("r" == j && d.bProcessing) g = sb(a);
      else if ("t" == j) g = tb(a);
      else if ("i" == j && d.bInfo) g = ub(a);
      else if ("p" ==
        j && d.bPaginate) g = vb(a);
      else if (0 !== m.ext.feature.length) {
        i = m.ext.feature;
        q = 0;
        for (n = i.length; q < n; q++)
          if (j == i[q].cFeature) {
            g = i[q].fnInit(a);
            break
          }
      }
      g && (i = a.aanFeatures, i[j] || (i[j] = []), i[j].push(g), e.append(g))
    }
    c.replaceWith(e);
    a.nHolding = null
  }

  function ea(a, b) {
    var c = h(b).children("tr"),
      d, e, f, g, j, i, n, l, q, k;
    a.splice(0, a.length);
    f = 0;
    for (i = c.length; f < i; f++) a.push([]);
    f = 0;
    for (i = c.length; f < i; f++) {
      d = c[f];
      for (e = d.firstChild; e;) {
        if ("TD" == e.nodeName.toUpperCase() || "TH" == e.nodeName.toUpperCase()) {
          l = 1 * e.getAttribute("colspan");
          q = 1 * e.getAttribute("rowspan");
          l = !l || 0 === l || 1 === l ? 1 : l;
          q = !q || 0 === q || 1 === q ? 1 : q;
          g = 0;
          for (j = a[f]; j[g];) g++;
          n = g;
          k = 1 === l ? !0 : !1;
          for (j = 0; j < l; j++)
            for (g = 0; g < q; g++) a[f + g][n + j] = {
              cell: e,
              unique: k
            }, a[f + g].nTr = d
        }
        e = e.nextSibling
      }
    }
  }

  function ta(a, b, c) {
    var d = [];
    c || (c = a.aoHeader, b && (c = [], ea(c, b)));
    for (var b = 0, e = c.length; b < e; b++)
      for (var f = 0, g = c[b].length; f < g; f++)
        if (c[b][f].unique && (!d[f] || !a.bSortCellsTop)) d[f] = c[b][f].cell;
    return d
  }

  function ua(a, b, c) {
    s(a, "aoServerParams", "serverParams", [b]);
    if (b && h.isArray(b)) {
      var d = {},
        e = /(.*?)\[\]$/;
      h.each(b, function (a, b) {
        var c = b.name.match(e);
        c ? (c = c[0], d[c] || (d[c] = []), d[c].push(b.value)) : d[b.name] = b.value
      });
      b = d
    }
    var f, g = a.ajax,
      j = a.oInstance,
      i = function (b) {
        s(a, null, "xhr", [a, b, a.jqXHR]);
        c(b)
      };
    if (h.isPlainObject(g) && g.data) {
      f = g.data;
      var n = h.isFunction(f) ? f(b, a) : f,
        b = h.isFunction(f) && n ? n : h.extend(!0, b, n);
      delete g.data
    }
    n = {
      data: b,
      success: function (b) {
        var c = b.error || b.sError;
        c && K(a, 0, c);
        a.json = b;
        i(b)
      },
      dataType: "json",
      cache: !1,
      type: a.sServerMethod,
      error: function (b, c) {
        var d = s(a, null, "xhr", [a, null, a.jqXHR]); - 1 === h.inArray(!0, d) && ("parsererror" == c ? K(a, 0, "Invalid JSON response", 1) : 4 === b.readyState && K(a, 0, "Ajax error", 7));
        C(a, !1)
      }
    };
    a.oAjaxData = b;
    s(a, null, "preXhr", [a, b]);
    a.fnServerData ? a.fnServerData.call(j, a.sAjaxSource, h.map(b, function (a, b) {
      return {
        name: b,
        value: a
      }
    }), i, a) : a.sAjaxSource || "string" === typeof g ? a.jqXHR = h.ajax(h.extend(n, {
      url: g || a.sAjaxSource
    })) : h.isFunction(g) ? a.jqXHR = g.call(j, b, i, a) : (a.jqXHR = h.ajax(h.extend(n, g)), g.data = f)
  }

  function nb(a) {
    return a.bAjaxDataGet ? (a.iDraw++, C(a, !0), ua(a, wb(a), function (b) {
      xb(a, b)
    }), !1) : !0
  }

  function wb(a) {
    var b = a.aoColumns,
      c = b.length,
      d = a.oFeatures,
      e = a.oPreviousSearch,
      f = a.aoPreSearchCols,
      g, j = [],
      i, n, l, k = W(a);
    g = a._iDisplayStart;
    i = !1 !== d.bPaginate ? a._iDisplayLength : -1;
    var r = function (a, b) {
      j.push({
        name: a,
        value: b
      })
    };
    r("sEcho", a.iDraw);
    r("iColumns", c);
    r("sColumns", D(b, "sName").join(","));
    r("iDisplayStart", g);
    r("iDisplayLength", i);
    var ra = {
      draw: a.iDraw,
      columns: [],
      order: [],
      start: g,
      length: i,
      search: {
        value: e.sSearch,
        regex: e.bRegex
      }
    };
    for (g = 0; g < c; g++) n = b[g],
      l = f[g], i = "function" == typeof n.mData ? "function" : n.mData, ra.columns.push({
        data: i,
        name: n.sName,
        searchable: n.bSearchable,
        orderable: n.bSortable,
        search: {
          value: l.sSearch,
          regex: l.bRegex
        }
      }), r("mDataProp_" + g, i), d.bFilter && (r("sSearch_" + g, l.sSearch), r("bRegex_" + g, l.bRegex), r("bSearchable_" + g, n.bSearchable)), d.bSort && r("bSortable_" + g, n.bSortable);
    d.bFilter && (r("sSearch", e.sSearch), r("bRegex", e.bRegex));
    d.bSort && (h.each(k, function (a, b) {
      ra.order.push({
        column: b.col,
        dir: b.dir
      });
      r("iSortCol_" + a, b.col);
      r("sSortDir_" +
        a, b.dir)
    }), r("iSortingCols", k.length));
    b = m.ext.legacy.ajax;
    return null === b ? a.sAjaxSource ? j : ra : b ? j : ra
  }

  function xb(a, b) {
    var c = va(a, b),
      d = b.sEcho !== k ? b.sEcho : b.draw,
      e = b.iTotalRecords !== k ? b.iTotalRecords : b.recordsTotal,
      f = b.iTotalDisplayRecords !== k ? b.iTotalDisplayRecords : b.recordsFiltered;
    if (d) {
      if (1 * d < a.iDraw) return;
      a.iDraw = 1 * d
    }
    pa(a);
    a._iRecordsTotal = parseInt(e, 10);
    a._iRecordsDisplay = parseInt(f, 10);
    d = 0;
    for (e = c.length; d < e; d++) N(a, c[d]);
    a.aiDisplay = a.aiDisplayMaster.slice();
    a.bAjaxDataGet = !1;
    O(a);
    a._bInitComplete ||
      wa(a, b);
    a.bAjaxDataGet = !0;
    C(a, !1)
  }

  function va(a, b) {
    var c = h.isPlainObject(a.ajax) && a.ajax.dataSrc !== k ? a.ajax.dataSrc : a.sAjaxDataProp;
    return "data" === c ? b.aaData || b[c] : "" !== c ? R(c)(b) : b
  }

  function rb(a) {
    var b = a.oClasses,
      c = a.sTableId,
      d = a.oLanguage,
      e = a.oPreviousSearch,
      f = a.aanFeatures,
      g = '<input type="search" class="' + b.sFilterInput + '"/>',
      j = d.sSearch,
      j = j.match(/_INPUT_/) ? j.replace("_INPUT_", g) : j + g,
      b = h("<div/>", {
        id: !f.f ? c + "_filter" : null,
        "class": b.sFilter
      }).append(h("<label/>").append(j)),
      f = function () {
        var b = !this.value ?
          "" : this.value;
        b != e.sSearch && (ga(a, {
          sSearch: b,
          bRegex: e.bRegex,
          bSmart: e.bSmart,
          bCaseInsensitive: e.bCaseInsensitive
        }), a._iDisplayStart = 0, O(a))
      },
      g = null !== a.searchDelay ? a.searchDelay : "ssp" === y(a) ? 400 : 0,
      i = h("input", b).val(e.sSearch).attr("placeholder", d.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", g ? Qa(f, g) : f).on("keypress.DT", function (a) {
        if (13 == a.keyCode) return !1
      }).attr("aria-controls", c);
    h(a.nTable).on("search.dt.DT", function (b, c) {
      if (a === c) try {
        i[0] !== H.activeElement && i.val(e.sSearch)
      } catch (d) {}
    });
    return b[0]
  }

  function ga(a, b, c) {
    var d = a.oPreviousSearch,
      e = a.aoPreSearchCols,
      f = function (a) {
        d.sSearch = a.sSearch;
        d.bRegex = a.bRegex;
        d.bSmart = a.bSmart;
        d.bCaseInsensitive = a.bCaseInsensitive
      };
    Ia(a);
    if ("ssp" != y(a)) {
      yb(a, b.sSearch, c, b.bEscapeRegex !== k ? !b.bEscapeRegex : b.bRegex, b.bSmart, b.bCaseInsensitive);
      f(b);
      for (b = 0; b < e.length; b++) zb(a, e[b].sSearch, b, e[b].bEscapeRegex !== k ? !e[b].bEscapeRegex : e[b].bRegex, e[b].bSmart, e[b].bCaseInsensitive);
      Ab(a)
    } else f(b);
    a.bFiltered = !0;
    s(a, null, "search", [a])
  }

  function Ab(a) {
    for (var b =
        m.ext.search, c = a.aiDisplay, d, e, f = 0, g = b.length; f < g; f++) {
      for (var j = [], i = 0, n = c.length; i < n; i++) e = c[i], d = a.aoData[e], b[f](a, d._aFilterData, e, d._aData, i) && j.push(e);
      c.length = 0;
      h.merge(c, j)
    }
  }

  function zb(a, b, c, d, e, f) {
    if ("" !== b) {
      for (var g = [], j = a.aiDisplay, d = Ra(b, d, e, f), e = 0; e < j.length; e++) b = a.aoData[j[e]]._aFilterData[c], d.test(b) && g.push(j[e]);
      a.aiDisplay = g
    }
  }

  function yb(a, b, c, d, e, f) {
    var d = Ra(b, d, e, f),
      f = a.oPreviousSearch.sSearch,
      g = a.aiDisplayMaster,
      j, e = [];
    0 !== m.ext.search.length && (c = !0);
    j = Bb(a);
    if (0 >= b.length) a.aiDisplay =
      g.slice();
    else {
      if (j || c || f.length > b.length || 0 !== b.indexOf(f) || a.bSorted) a.aiDisplay = g.slice();
      b = a.aiDisplay;
      for (c = 0; c < b.length; c++) d.test(a.aoData[b[c]]._sFilterRow) && e.push(b[c]);
      a.aiDisplay = e
    }
  }

  function Ra(a, b, c, d) {
    a = b ? a : Sa(a);
    c && (a = "^(?=.*?" + h.map(a.match(/"[^"]+"|[^ ]+/g) || [""], function (a) {
      if ('"' === a.charAt(0)) var b = a.match(/^"(.*)"$/),
        a = b ? b[1] : a;
      return a.replace('"', "")
    }).join(")(?=.*?") + ").*$");
    return RegExp(a, d ? "i" : "")
  }

  function Bb(a) {
    var b = a.aoColumns,
      c, d, e, f, g, j, i, h, l = m.ext.type.search;
    c = !1;
    d = 0;
    for (f = a.aoData.length; d < f; d++)
      if (h = a.aoData[d], !h._aFilterData) {
        j = [];
        e = 0;
        for (g = b.length; e < g; e++) c = b[e], c.bSearchable ? (i = B(a, d, e, "filter"), l[c.sType] && (i = l[c.sType](i)), null === i && (i = ""), "string" !== typeof i && i.toString && (i = i.toString())) : i = "", i.indexOf && -1 !== i.indexOf("&") && (xa.innerHTML = i, i = $b ? xa.textContent : xa.innerText), i.replace && (i = i.replace(/[\r\n]/g, "")), j.push(i);
        h._aFilterData = j;
        h._sFilterRow = j.join("  ");
        c = !0
      }
    return c
  }

  function Cb(a) {
    return {
      search: a.sSearch,
      smart: a.bSmart,
      regex: a.bRegex,
      caseInsensitive: a.bCaseInsensitive
    }
  }

  function Db(a) {
    return {
      sSearch: a.search,
      bSmart: a.smart,
      bRegex: a.regex,
      bCaseInsensitive: a.caseInsensitive
    }
  }

  function ub(a) {
    var b = a.sTableId,
      c = a.aanFeatures.i,
      d = h("<div/>", {
        "class": a.oClasses.sInfo,
        id: !c ? b + "_info" : null
      });
    c || (a.aoDrawCallback.push({
      fn: Eb,
      sName: "information"
    }), d.attr("role", "status").attr("aria-live", "polite"), h(a.nTable).attr("aria-describedby", b + "_info"));
    return d[0]
  }

  function Eb(a) {
    var b = a.aanFeatures.i;
    if (0 !== b.length) {
      var c = a.oLanguage,
        d = a._iDisplayStart +
        1,
        e = a.fnDisplayEnd(),
        f = a.fnRecordsTotal(),
        g = a.fnRecordsDisplay(),
        j = g ? c.sInfo : c.sInfoEmpty;
      g !== f && (j += " " + c.sInfoFiltered);
      j += c.sInfoPostFix;
      j = Fb(a, j);
      c = c.fnInfoCallback;
      null !== c && (j = c.call(a.oInstance, a, d, e, f, g, j));
      h(b).html(j)
    }
  }

  function Fb(a, b) {
    var c = a.fnFormatNumber,
      d = a._iDisplayStart + 1,
      e = a._iDisplayLength,
      f = a.fnRecordsDisplay(),
      g = -1 === e;
    return b.replace(/_START_/g, c.call(a, d)).replace(/_END_/g, c.call(a, a.fnDisplayEnd())).replace(/_MAX_/g, c.call(a, a.fnRecordsTotal())).replace(/_TOTAL_/g, c.call(a,
      f)).replace(/_PAGE_/g, c.call(a, g ? 1 : Math.ceil(d / e))).replace(/_PAGES_/g, c.call(a, g ? 1 : Math.ceil(f / e)))
  }

  function ha(a) {
    var b, c, d = a.iInitDisplayStart,
      e = a.aoColumns,
      f;
    c = a.oFeatures;
    var g = a.bDeferLoading;
    if (a.bInitialised) {
      pb(a);
      mb(a);
      fa(a, a.aoHeader);
      fa(a, a.aoFooter);
      C(a, !0);
      c.bAutoWidth && Ha(a);
      b = 0;
      for (c = e.length; b < c; b++) f = e[b], f.sWidth && (f.nTh.style.width = v(f.sWidth));
      s(a, null, "preInit", [a]);
      T(a);
      e = y(a);
      if ("ssp" != e || g) "ajax" == e ? ua(a, [], function (c) {
        var f = va(a, c);
        for (b = 0; b < f.length; b++) N(a, f[b]);
        a.iInitDisplayStart =
          d;
        T(a);
        C(a, !1);
        wa(a, c)
      }, a) : (C(a, !1), wa(a))
    } else setTimeout(function () {
      ha(a)
    }, 200)
  }

  function wa(a, b) {
    a._bInitComplete = !0;
    (b || a.oInit.aaData) && Z(a);
    s(a, null, "plugin-init", [a, b]);
    s(a, "aoInitComplete", "init", [a, b])
  }

  function Ta(a, b) {
    var c = parseInt(b, 10);
    a._iDisplayLength = c;
    Ua(a);
    s(a, null, "length", [a, c])
  }

  function qb(a) {
    for (var b = a.oClasses, c = a.sTableId, d = a.aLengthMenu, e = h.isArray(d[0]), f = e ? d[0] : d, d = e ? d[1] : d, e = h("<select/>", {
        name: c + "_length",
        "aria-controls": c,
        "class": b.sLengthSelect
      }), g = 0, j = f.length; g < j; g++) e[0][g] =
      new Option(d[g], f[g]);
    var i = h("<div><label/></div>").addClass(b.sLength);
    a.aanFeatures.l || (i[0].id = c + "_length");
    i.children().append(a.oLanguage.sLengthMenu.replace("_MENU_", e[0].outerHTML));
    h("select", i).val(a._iDisplayLength).on("change.DT", function () {
      Ta(a, h(this).val());
      O(a)
    });
    h(a.nTable).on("length.dt.DT", function (b, c, d) {
      a === c && h("select", i).val(d)
    });
    return i[0]
  }

  function vb(a) {
    var b = a.sPaginationType,
      c = m.ext.pager[b],
      d = "function" === typeof c,
      e = function (a) {
        O(a)
      },
      b = h("<div/>").addClass(a.oClasses.sPaging +
        b)[0],
      f = a.aanFeatures;
    d || c.fnInit(a, b, e);
    f.p || (b.id = a.sTableId + "_paginate", a.aoDrawCallback.push({
      fn: function (a) {
        if (d) {
          var b = a._iDisplayStart,
            i = a._iDisplayLength,
            h = a.fnRecordsDisplay(),
            l = -1 === i,
            b = l ? 0 : Math.ceil(b / i),
            i = l ? 1 : Math.ceil(h / i),
            h = c(b, i),
            k, l = 0;
          for (k = f.p.length; l < k; l++) Pa(a, "pageButton")(a, f.p[l], l, h, b, i)
        } else c.fnUpdate(a, e)
      },
      sName: "pagination"
    }));
    return b
  }

  function Va(a, b, c) {
    var d = a._iDisplayStart,
      e = a._iDisplayLength,
      f = a.fnRecordsDisplay();
    0 === f || -1 === e ? d = 0 : "number" === typeof b ? (d = b * e, d > f &&
      (d = 0)) : "first" == b ? d = 0 : "previous" == b ? (d = 0 <= e ? d - e : 0, 0 > d && (d = 0)) : "next" == b ? d + e < f && (d += e) : "last" == b ? d = Math.floor((f - 1) / e) * e : K(a, 0, "Unknown paging action: " + b, 5);
    b = a._iDisplayStart !== d;
    a._iDisplayStart = d;
    b && (s(a, null, "page", [a]), c && O(a));
    return b
  }

  function sb(a) {
    return h("<div/>", {
      id: !a.aanFeatures.r ? a.sTableId + "_processing" : null,
      "class": a.oClasses.sProcessing
    }).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]
  }

  function C(a, b) {
    a.oFeatures.bProcessing && h(a.aanFeatures.r).css("display", b ? "block" : "none");
    s(a, null, "processing", [a, b])
  }

  function tb(a) {
    var b = h(a.nTable);
    b.attr("role", "grid");
    var c = a.oScroll;
    if ("" === c.sX && "" === c.sY) return a.nTable;
    var d = c.sX,
      e = c.sY,
      f = a.oClasses,
      g = b.children("caption"),
      j = g.length ? g[0]._captionSide : null,
      i = h(b[0].cloneNode(!1)),
      n = h(b[0].cloneNode(!1)),
      l = b.children("tfoot");
    l.length || (l = null);
    i = h("<div/>", {
      "class": f.sScrollWrapper
    }).append(h("<div/>", {
      "class": f.sScrollHead
    }).css({
      overflow: "hidden",
      position: "relative",
      border: 0,
      width: d ? !d ? null : v(d) : "100%"
    }).append(h("<div/>", {
      "class": f.sScrollHeadInner
    }).css({
      "box-sizing": "content-box",
      width: c.sXInner || "100%"
    }).append(i.removeAttr("id").css("margin-left", 0).append("top" === j ? g : null).append(b.children("thead"))))).append(h("<div/>", {
      "class": f.sScrollBody
    }).css({
      position: "relative",
      overflow: "auto",
      width: !d ? null : v(d)
    }).append(b));
    l && i.append(h("<div/>", {
      "class": f.sScrollFoot
    }).css({
      overflow: "hidden",
      border: 0,
      width: d ? !d ? null : v(d) : "100%"
    }).append(h("<div/>", {
      "class": f.sScrollFootInner
    }).append(n.removeAttr("id").css("margin-left",
      0).append("bottom" === j ? g : null).append(b.children("tfoot")))));
    var b = i.children(),
      k = b[0],
      f = b[1],
      r = l ? b[2] : null;
    if (d) h(f).on("scroll.DT", function () {
      var a = this.scrollLeft;
      k.scrollLeft = a;
      l && (r.scrollLeft = a)
    });
    h(f).css(e && c.bCollapse ? "max-height" : "height", e);
    a.nScrollHead = k;
    a.nScrollBody = f;
    a.nScrollFoot = r;
    a.aoDrawCallback.push({
      fn: ma,
      sName: "scrolling"
    });
    return i[0]
  }

  function ma(a) {
    var b = a.oScroll,
      c = b.sX,
      d = b.sXInner,
      e = b.sY,
      b = b.iBarWidth,
      f = h(a.nScrollHead),
      g = f[0].style,
      j = f.children("div"),
      i = j[0].style,
      n = j.children("table"),
      j = a.nScrollBody,
      l = h(j),
      q = j.style,
      r = h(a.nScrollFoot).children("div"),
      m = r.children("table"),
      p = h(a.nTHead),
      o = h(a.nTable),
      u = o[0],
      s = u.style,
      t = a.nTFoot ? h(a.nTFoot) : null,
      x = a.oBrowser,
      U = x.bScrollOversize,
      ac = D(a.aoColumns, "nTh"),
      P, L, Q, w, Wa = [],
      y = [],
      z = [],
      A = [],
      B, C = function (a) {
        a = a.style;
        a.paddingTop = "0";
        a.paddingBottom = "0";
        a.borderTopWidth = "0";
        a.borderBottomWidth = "0";
        a.height = 0
      };
    L = j.scrollHeight > j.clientHeight;
    if (a.scrollBarVis !== L && a.scrollBarVis !== k) a.scrollBarVis = L, Z(a);
    else {
      a.scrollBarVis = L;
      o.children("thead, tfoot").remove();
      t && (Q = t.clone().prependTo(o), P = t.find("tr"), Q = Q.find("tr"));
      w = p.clone().prependTo(o);
      p = p.find("tr");
      L = w.find("tr");
      w.find("th, td").removeAttr("tabindex");
      c || (q.width = "100%", f[0].style.width = "100%");
      h.each(ta(a, w), function (b, c) {
        B = $(a, b);
        c.style.width = a.aoColumns[B].sWidth
      });
      t && I(function (a) {
        a.style.width = ""
      }, Q);
      f = o.outerWidth();
      if ("" === c) {
        s.width = "100%";
        if (U && (o.find("tbody").height() > j.offsetHeight || "scroll" == l.css("overflow-y"))) s.width = v(o.outerWidth() - b);
        f = o.outerWidth()
      } else "" !== d && (s.width =
        v(d), f = o.outerWidth());
      I(C, L);
      I(function (a) {
        z.push(a.innerHTML);
        Wa.push(v(h(a).css("width")))
      }, L);
      I(function (a, b) {
        if (h.inArray(a, ac) !== -1) a.style.width = Wa[b]
      }, p);
      h(L).height(0);
      t && (I(C, Q), I(function (a) {
        A.push(a.innerHTML);
        y.push(v(h(a).css("width")))
      }, Q), I(function (a, b) {
        a.style.width = y[b]
      }, P), h(Q).height(0));
      I(function (a, b) {
        a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' + z[b] + "</div>";
        a.style.width = Wa[b]
      }, L);
      t && I(function (a, b) {
        a.innerHTML = '<div class="dataTables_sizing" style="height:0;overflow:hidden;">' +
          A[b] + "</div>";
        a.style.width = y[b]
      }, Q);
      if (o.outerWidth() < f) {
        P = j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y") ? f + b : f;
        if (U && (j.scrollHeight > j.offsetHeight || "scroll" == l.css("overflow-y"))) s.width = v(P - b);
        ("" === c || "" !== d) && K(a, 1, "Possible column misalignment", 6)
      } else P = "100%";
      q.width = v(P);
      g.width = v(P);
      t && (a.nScrollFoot.style.width = v(P));
      !e && U && (q.height = v(u.offsetHeight + b));
      c = o.outerWidth();
      n[0].style.width = v(c);
      i.width = v(c);
      d = o.height() > j.clientHeight || "scroll" == l.css("overflow-y");
      e = "padding" +
        (x.bScrollbarLeft ? "Left" : "Right");
      i[e] = d ? b + "px" : "0px";
      t && (m[0].style.width = v(c), r[0].style.width = v(c), r[0].style[e] = d ? b + "px" : "0px");
      o.children("colgroup").insertBefore(o.children("thead"));
      l.scroll();
      if ((a.bSorted || a.bFiltered) && !a._drawHold) j.scrollTop = 0
    }
  }

  function I(a, b, c) {
    for (var d = 0, e = 0, f = b.length, g, j; e < f;) {
      g = b[e].firstChild;
      for (j = c ? c[e].firstChild : null; g;) 1 === g.nodeType && (c ? a(g, j, d) : a(g, d), d++), g = g.nextSibling, j = c ? j.nextSibling : null;
      e++
    }
  }

  function Ha(a) {
    var b = a.nTable,
      c = a.aoColumns,
      d = a.oScroll,
      e = d.sY,
      f = d.sX,
      g = d.sXInner,
      j = c.length,
      i = na(a, "bVisible"),
      n = h("th", a.nTHead),
      l = b.getAttribute("width"),
      k = b.parentNode,
      r = !1,
      m, p, o = a.oBrowser,
      d = o.bScrollOversize;
    (m = b.style.width) && -1 !== m.indexOf("%") && (l = m);
    for (m = 0; m < i.length; m++) p = c[i[m]], null !== p.sWidth && (p.sWidth = Gb(p.sWidthOrig, k), r = !0);
    if (d || !r && !f && !e && j == ba(a) && j == n.length)
      for (m = 0; m < j; m++) i = $(a, m), null !== i && (c[i].sWidth = v(n.eq(m).width()));
    else {
      j = h(b).clone().css("visibility", "hidden").removeAttr("id");
      j.find("tbody tr").remove();
      var u = h("<tr/>").appendTo(j.find("tbody"));
      j.find("thead, tfoot").remove();
      j.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());
      j.find("tfoot th, tfoot td").css("width", "");
      n = ta(a, j.find("thead")[0]);
      for (m = 0; m < i.length; m++) p = c[i[m]], n[m].style.width = null !== p.sWidthOrig && "" !== p.sWidthOrig ? v(p.sWidthOrig) : "", p.sWidthOrig && f && h(n[m]).append(h("<div/>").css({
        width: p.sWidthOrig,
        margin: 0,
        padding: 0,
        border: 0,
        height: 1
      }));
      if (a.aoData.length)
        for (m = 0; m < i.length; m++) r = i[m], p = c[r], h(Hb(a, r)).clone(!1).append(p.sContentPadding).appendTo(u);
      h("[name]",
        j).removeAttr("name");
      p = h("<div/>").css(f || e ? {
        position: "absolute",
        top: 0,
        left: 0,
        height: 1,
        right: 0,
        overflow: "hidden"
      } : {}).append(j).appendTo(k);
      f && g ? j.width(g) : f ? (j.css("width", "auto"), j.removeAttr("width"), j.width() < k.clientWidth && l && j.width(k.clientWidth)) : e ? j.width(k.clientWidth) : l && j.width(l);
      for (m = e = 0; m < i.length; m++) k = h(n[m]), g = k.outerWidth() - k.width(), k = o.bBounding ? Math.ceil(n[m].getBoundingClientRect().width) : k.outerWidth(), e += k, c[i[m]].sWidth = v(k - g);
      b.style.width = v(e);
      p.remove()
    }
    l && (b.style.width =
      v(l));
    if ((l || f) && !a._reszEvt) b = function () {
      h(E).on("resize.DT-" + a.sInstance, Qa(function () {
        Z(a)
      }))
    }, d ? setTimeout(b, 1E3) : b(), a._reszEvt = !0
  }

  function Gb(a, b) {
    if (!a) return 0;
    var c = h("<div/>").css("width", v(a)).appendTo(b || H.body),
      d = c[0].offsetWidth;
    c.remove();
    return d
  }

  function Hb(a, b) {
    var c = Ib(a, b);
    if (0 > c) return null;
    var d = a.aoData[c];
    return !d.nTr ? h("<td/>").html(B(a, c, b, "display"))[0] : d.anCells[b]
  }

  function Ib(a, b) {
    for (var c, d = -1, e = -1, f = 0, g = a.aoData.length; f < g; f++) c = B(a, f, b, "display") + "", c = c.replace(bc,
      ""), c = c.replace(/&nbsp;/g, " "), c.length > d && (d = c.length, e = f);
    return e
  }

  function v(a) {
    return null === a ? "0px" : "number" == typeof a ? 0 > a ? "0px" : a + "px" : a.match(/\d$/) ? a + "px" : a
  }

  function W(a) {
    var b, c, d = [],
      e = a.aoColumns,
      f, g, j, i;
    b = a.aaSortingFixed;
    c = h.isPlainObject(b);
    var n = [];
    f = function (a) {
      a.length && !h.isArray(a[0]) ? n.push(a) : h.merge(n, a)
    };
    h.isArray(b) && f(b);
    c && b.pre && f(b.pre);
    f(a.aaSorting);
    c && b.post && f(b.post);
    for (a = 0; a < n.length; a++) {
      i = n[a][0];
      f = e[i].aDataSort;
      b = 0;
      for (c = f.length; b < c; b++) g = f[b], j = e[g].sType ||
        "string", n[a]._idx === k && (n[a]._idx = h.inArray(n[a][1], e[g].asSorting)), d.push({
          src: i,
          col: g,
          dir: n[a][1],
          index: n[a]._idx,
          type: j,
          formatter: m.ext.type.order[j + "-pre"]
        })
    }
    return d
  }

  function ob(a) {
    var b, c, d = [],
      e = m.ext.type.order,
      f = a.aoData,
      g = 0,
      j, i = a.aiDisplayMaster,
      h;
    Ia(a);
    h = W(a);
    b = 0;
    for (c = h.length; b < c; b++) j = h[b], j.formatter && g++, Jb(a, j.col);
    if ("ssp" != y(a) && 0 !== h.length) {
      b = 0;
      for (c = i.length; b < c; b++) d[i[b]] = b;
      g === h.length ? i.sort(function (a, b) {
        var c, e, g, j, i = h.length,
          k = f[a]._aSortData,
          m = f[b]._aSortData;
        for (g =
          0; g < i; g++)
          if (j = h[g], c = k[j.col], e = m[j.col], c = c < e ? -1 : c > e ? 1 : 0, 0 !== c) return "asc" === j.dir ? c : -c;
        c = d[a];
        e = d[b];
        return c < e ? -1 : c > e ? 1 : 0
      }) : i.sort(function (a, b) {
        var c, g, j, i, k = h.length,
          m = f[a]._aSortData,
          p = f[b]._aSortData;
        for (j = 0; j < k; j++)
          if (i = h[j], c = m[i.col], g = p[i.col], i = e[i.type + "-" + i.dir] || e["string-" + i.dir], c = i(c, g), 0 !== c) return c;
        c = d[a];
        g = d[b];
        return c < g ? -1 : c > g ? 1 : 0
      })
    }
    a.bSorted = !0
  }

  function Kb(a) {
    for (var b, c, d = a.aoColumns, e = W(a), a = a.oLanguage.oAria, f = 0, g = d.length; f < g; f++) {
      c = d[f];
      var j = c.asSorting;
      b = c.sTitle.replace(/<.*?>/g,
        "");
      var i = c.nTh;
      i.removeAttribute("aria-sort");
      c.bSortable && (0 < e.length && e[0].col == f ? (i.setAttribute("aria-sort", "asc" == e[0].dir ? "ascending" : "descending"), c = j[e[0].index + 1] || j[0]) : c = j[0], b += "asc" === c ? a.sSortAscending : a.sSortDescending);
      i.setAttribute("aria-label", b)
    }
  }

  function Xa(a, b, c, d) {
    var e = a.aaSorting,
      f = a.aoColumns[b].asSorting,
      g = function (a, b) {
        var c = a._idx;
        c === k && (c = h.inArray(a[1], f));
        return c + 1 < f.length ? c + 1 : b ? null : 0
      };
    "number" === typeof e[0] && (e = a.aaSorting = [e]);
    c && a.oFeatures.bSortMulti ? (c = h.inArray(b,
      D(e, "0")), -1 !== c ? (b = g(e[c], !0), null === b && 1 === e.length && (b = 0), null === b ? e.splice(c, 1) : (e[c][1] = f[b], e[c]._idx = b)) : (e.push([b, f[0], 0]), e[e.length - 1]._idx = 0)) : e.length && e[0][0] == b ? (b = g(e[0]), e.length = 1, e[0][1] = f[b], e[0]._idx = b) : (e.length = 0, e.push([b, f[0]]), e[0]._idx = 0);
    T(a);
    "function" == typeof d && d(a)
  }

  function Oa(a, b, c, d) {
    var e = a.aoColumns[c];
    Ya(b, {}, function (b) {
      !1 !== e.bSortable && (a.oFeatures.bProcessing ? (C(a, !0), setTimeout(function () {
        Xa(a, c, b.shiftKey, d);
        "ssp" !== y(a) && C(a, !1)
      }, 0)) : Xa(a, c, b.shiftKey, d))
    })
  }

  function ya(a) {
    var b = a.aLastSort,
      c = a.oClasses.sSortColumn,
      d = W(a),
      e = a.oFeatures,
      f, g;
    if (e.bSort && e.bSortClasses) {
      e = 0;
      for (f = b.length; e < f; e++) g = b[e].src, h(D(a.aoData, "anCells", g)).removeClass(c + (2 > e ? e + 1 : 3));
      e = 0;
      for (f = d.length; e < f; e++) g = d[e].src, h(D(a.aoData, "anCells", g)).addClass(c + (2 > e ? e + 1 : 3))
    }
    a.aLastSort = d
  }

  function Jb(a, b) {
    var c = a.aoColumns[b],
      d = m.ext.order[c.sSortDataType],
      e;
    d && (e = d.call(a.oInstance, a, b, aa(a, b)));
    for (var f, g = m.ext.type.order[c.sType + "-pre"], j = 0, i = a.aoData.length; j < i; j++)
      if (c = a.aoData[j],
        c._aSortData || (c._aSortData = []), !c._aSortData[b] || d) f = d ? e[j] : B(a, j, b, "sort"), c._aSortData[b] = g ? g(f) : f
  }

  function za(a) {
    if (a.oFeatures.bStateSave && !a.bDestroying) {
      var b = {
        time: +new Date,
        start: a._iDisplayStart,
        length: a._iDisplayLength,
        order: h.extend(!0, [], a.aaSorting),
        search: Cb(a.oPreviousSearch),
        columns: h.map(a.aoColumns, function (b, d) {
          return {
            visible: b.bVisible,
            search: Cb(a.aoPreSearchCols[d])
          }
        })
      };
      s(a, "aoStateSaveParams", "stateSaveParams", [a, b]);
      a.oSavedState = b;
      a.fnStateSaveCallback.call(a.oInstance, a,
        b)
    }
  }

  function Lb(a, b, c) {
    var d, e, f = a.aoColumns,
      b = function (b) {
        if (b && b.time) {
          var i = s(a, "aoStateLoadParams", "stateLoadParams", [a, g]);
          if (-1 === h.inArray(!1, i) && (i = a.iStateDuration, !(0 < i && b.time < +new Date - 1E3 * i) && !(b.columns && f.length !== b.columns.length))) {
            a.oLoadedState = h.extend(!0, {}, g);
            b.start !== k && (a._iDisplayStart = b.start, a.iInitDisplayStart = b.start);
            b.length !== k && (a._iDisplayLength = b.length);
            b.order !== k && (a.aaSorting = [], h.each(b.order, function (b, c) {
              a.aaSorting.push(c[0] >= f.length ? [0, c[1]] : c)
            }));
            b.search !==
              k && h.extend(a.oPreviousSearch, Db(b.search));
            if (b.columns) {
              d = 0;
              for (e = b.columns.length; d < e; d++) i = b.columns[d], i.visible !== k && (f[d].bVisible = i.visible), i.search !== k && h.extend(a.aoPreSearchCols[d], Db(i.search))
            }
            s(a, "aoStateLoaded", "stateLoaded", [a, g])
          }
        }
        c()
      };
    if (a.oFeatures.bStateSave) {
      var g = a.fnStateLoadCallback.call(a.oInstance, a, b);
      g !== k && b(g)
    } else c()
  }

  function Aa(a) {
    var b = m.settings,
      a = h.inArray(a, D(b, "nTable"));
    return -1 !== a ? b[a] : null
  }

  function K(a, b, c, d) {
    c = "DataTables warning: " + (a ? "table id=" + a.sTableId +
      " - " : "") + c;
    d && (c += ". For more information about this error, please see http://datatables.net/tn/" + d);
    if (b) E.console && console.log && console.log(c);
    else if (b = m.ext, b = b.sErrMode || b.errMode, a && s(a, null, "error", [a, d, c]), "alert" == b) alert(c);
    else {
      if ("throw" == b) throw Error(c);
      "function" == typeof b && b(a, d, c)
    }
  }

  function F(a, b, c, d) {
    h.isArray(c) ? h.each(c, function (c, d) {
      h.isArray(d) ? F(a, b, d[0], d[1]) : F(a, b, d)
    }) : (d === k && (d = c), b[c] !== k && (a[d] = b[c]))
  }

  function Mb(a, b, c) {
    var d, e;
    for (e in b) b.hasOwnProperty(e) && (d = b[e],
      h.isPlainObject(d) ? (h.isPlainObject(a[e]) || (a[e] = {}), h.extend(!0, a[e], d)) : a[e] = c && "data" !== e && "aaData" !== e && h.isArray(d) ? d.slice() : d);
    return a
  }

  function Ya(a, b, c) {
    h(a).on("click.DT", b, function (b) {
      a.blur();
      c(b)
    }).on("keypress.DT", b, function (a) {
      13 === a.which && (a.preventDefault(), c(a))
    }).on("selectstart.DT", function () {
      return !1
    })
  }

  function z(a, b, c, d) {
    c && a[b].push({
      fn: c,
      sName: d
    })
  }

  function s(a, b, c, d) {
    var e = [];
    b && (e = h.map(a[b].slice().reverse(), function (b) {
      return b.fn.apply(a.oInstance, d)
    }));
    null !== c && (b = h.Event(c +
      ".dt"), h(a.nTable).trigger(b, d), e.push(b.result));
    return e
  }

  function Ua(a) {
    var b = a._iDisplayStart,
      c = a.fnDisplayEnd(),
      d = a._iDisplayLength;
    b >= c && (b = c - d);
    b -= b % d;
    if (-1 === d || 0 > b) b = 0;
    a._iDisplayStart = b
  }

  function Pa(a, b) {
    var c = a.renderer,
      d = m.ext.renderer[b];
    return h.isPlainObject(c) && c[b] ? d[c[b]] || d._ : "string" === typeof c ? d[c] || d._ : d._
  }

  function y(a) {
    return a.oFeatures.bServerSide ? "ssp" : a.ajax || a.sAjaxSource ? "ajax" : "dom"
  }

  function ia(a, b) {
    var c = [],
      c = Nb.numbers_length,
      d = Math.floor(c / 2);
    b <= c ? c = X(0, b) : a <= d ? (c = X(0,
      c - 2), c.push("ellipsis"), c.push(b - 1)) : (a >= b - 1 - d ? c = X(b - (c - 2), b) : (c = X(a - d + 2, a + d - 1), c.push("ellipsis"), c.push(b - 1)), c.splice(0, 0, "ellipsis"), c.splice(0, 0, 0));
    c.DT_el = "span";
    return c
  }

  function fb(a) {
    h.each({
      num: function (b) {
        return Ba(b, a)
      },
      "num-fmt": function (b) {
        return Ba(b, a, Za)
      },
      "html-num": function (b) {
        return Ba(b, a, Ca)
      },
      "html-num-fmt": function (b) {
        return Ba(b, a, Ca, Za)
      }
    }, function (b, c) {
      x.type.order[b + a + "-pre"] = c;
      b.match(/^html\-/) && (x.type.search[b + a] = x.type.search.html)
    })
  }

  function Ob(a) {
    return function () {
      var b = [Aa(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
      return m.ext.internal[a].apply(this, b)
    }
  }
  var m = function (a) {
      this.$ = function (a, b) {
        return this.api(!0).$(a, b)
      };
      this._ = function (a, b) {
        return this.api(!0).rows(a, b).data()
      };
      this.api = function (a) {
        return a ? new u(Aa(this[x.iApiIndex])) : new u(this)
      };
      this.fnAddData = function (a, b) {
        var c = this.api(!0),
          d = h.isArray(a) && (h.isArray(a[0]) || h.isPlainObject(a[0])) ? c.rows.add(a) : c.row.add(a);
        (b === k || b) && c.draw();
        return d.flatten().toArray()
      };
      this.fnAdjustColumnSizing =
        function (a) {
          var b = this.api(!0).columns.adjust(),
            c = b.settings()[0],
            d = c.oScroll;
          a === k || a ? b.draw(!1) : ("" !== d.sX || "" !== d.sY) && ma(c)
        };
      this.fnClearTable = function (a) {
        var b = this.api(!0).clear();
        (a === k || a) && b.draw()
      };
      this.fnClose = function (a) {
        this.api(!0).row(a).child.hide()
      };
      this.fnDeleteRow = function (a, b, c) {
        var d = this.api(!0),
          a = d.rows(a),
          e = a.settings()[0],
          h = e.aoData[a[0][0]];
        a.remove();
        b && b.call(this, e, h);
        (c === k || c) && d.draw();
        return h
      };
      this.fnDestroy = function (a) {
        this.api(!0).destroy(a)
      };
      this.fnDraw = function (a) {
        this.api(!0).draw(a)
      };
      this.fnFilter = function (a, b, c, d, e, h) {
        e = this.api(!0);
        null === b || b === k ? e.search(a, c, d, h) : e.column(b).search(a, c, d, h);
        e.draw()
      };
      this.fnGetData = function (a, b) {
        var c = this.api(!0);
        if (a !== k) {
          var d = a.nodeName ? a.nodeName.toLowerCase() : "";
          return b !== k || "td" == d || "th" == d ? c.cell(a, b).data() : c.row(a).data() || null
        }
        return c.data().toArray()
      };
      this.fnGetNodes = function (a) {
        var b = this.api(!0);
        return a !== k ? b.row(a).node() : b.rows().nodes().flatten().toArray()
      };
      this.fnGetPosition = function (a) {
        var b = this.api(!0),
          c = a.nodeName.toUpperCase();
        return "TR" == c ? b.row(a).index() : "TD" == c || "TH" == c ? (a = b.cell(a).index(), [a.row, a.columnVisible, a.column]) : null
      };
      this.fnIsOpen = function (a) {
        return this.api(!0).row(a).child.isShown()
      };
      this.fnOpen = function (a, b, c) {
        return this.api(!0).row(a).child(b, c).show().child()[0]
      };
      this.fnPageChange = function (a, b) {
        var c = this.api(!0).page(a);
        (b === k || b) && c.draw(!1)
      };
      this.fnSetColumnVis = function (a, b, c) {
        a = this.api(!0).column(a).visible(b);
        (c === k || c) && a.columns.adjust().draw()
      };
      this.fnSettings = function () {
        return Aa(this[x.iApiIndex])
      };
      this.fnSort = function (a) {
        this.api(!0).order(a).draw()
      };
      this.fnSortListener = function (a, b, c) {
        this.api(!0).order.listener(a, b, c)
      };
      this.fnUpdate = function (a, b, c, d, e) {
        var h = this.api(!0);
        c === k || null === c ? h.row(b).data(a) : h.cell(b, c).data(a);
        (e === k || e) && h.columns.adjust();
        (d === k || d) && h.draw();
        return 0
      };
      this.fnVersionCheck = x.fnVersionCheck;
      var b = this,
        c = a === k,
        d = this.length;
      c && (a = {});
      this.oApi = this.internal = x.internal;
      for (var e in m.ext.internal) e && (this[e] = Ob(e));
      this.each(function () {
        var e = {},
          g = 1 < d ? Mb(e, a, !0) :
          a,
          j = 0,
          i, e = this.getAttribute("id"),
          n = !1,
          l = m.defaults,
          q = h(this);
        if ("table" != this.nodeName.toLowerCase()) K(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2);
        else {
          gb(l);
          hb(l.column);
          J(l, l, !0);
          J(l.column, l.column, !0);
          J(l, h.extend(g, q.data()));
          var r = m.settings,
            j = 0;
          for (i = r.length; j < i; j++) {
            var p = r[j];
            if (p.nTable == this || p.nTHead.parentNode == this || p.nTFoot && p.nTFoot.parentNode == this) {
              var u = g.bRetrieve !== k ? g.bRetrieve : l.bRetrieve;
              if (c || u) return p.oInstance;
              if (g.bDestroy !== k ? g.bDestroy : l.bDestroy) {
                p.oInstance.fnDestroy();
                break
              } else {
                K(p, 0, "Cannot reinitialise DataTable", 3);
                return
              }
            }
            if (p.sTableId == this.id) {
              r.splice(j, 1);
              break
            }
          }
          if (null === e || "" === e) this.id = e = "DataTables_Table_" + m.ext._unique++;
          var o = h.extend(!0, {}, m.models.oSettings, {
            sDestroyWidth: q[0].style.width,
            sInstance: e,
            sTableId: e
          });
          o.nTable = this;
          o.oApi = b.internal;
          o.oInit = g;
          r.push(o);
          o.oInstance = 1 === b.length ? b : q.dataTable();
          gb(g);
          g.oLanguage && Fa(g.oLanguage);
          g.aLengthMenu && !g.iDisplayLength && (g.iDisplayLength = h.isArray(g.aLengthMenu[0]) ? g.aLengthMenu[0][0] : g.aLengthMenu[0]);
          g = Mb(h.extend(!0, {}, l), g);
          F(o.oFeatures, g, "bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));
          F(o, g, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
            ["oSearch", "oPreviousSearch"],
            ["aoSearchCols", "aoPreSearchCols"],
            ["iDisplayLength", "_iDisplayLength"],
            ["bJQueryUI", "bJUI"]
          ]);
          F(o.oScroll, g, [
            ["sScrollX", "sX"],
            ["sScrollXInner", "sXInner"],
            ["sScrollY", "sY"],
            ["bScrollCollapse", "bCollapse"]
          ]);
          F(o.oLanguage, g, "fnInfoCallback");
          z(o, "aoDrawCallback", g.fnDrawCallback, "user");
          z(o, "aoServerParams", g.fnServerParams, "user");
          z(o, "aoStateSaveParams", g.fnStateSaveParams, "user");
          z(o, "aoStateLoadParams", g.fnStateLoadParams, "user");
          z(o, "aoStateLoaded", g.fnStateLoaded,
            "user");
          z(o, "aoRowCallback", g.fnRowCallback, "user");
          z(o, "aoRowCreatedCallback", g.fnCreatedRow, "user");
          z(o, "aoHeaderCallback", g.fnHeaderCallback, "user");
          z(o, "aoFooterCallback", g.fnFooterCallback, "user");
          z(o, "aoInitComplete", g.fnInitComplete, "user");
          z(o, "aoPreDrawCallback", g.fnPreDrawCallback, "user");
          o.rowIdFn = R(g.rowId);
          ib(o);
          var t = o.oClasses;
          g.bJQueryUI ? (h.extend(t, m.ext.oJUIClasses, g.oClasses), g.sDom === l.sDom && "lfrtip" === l.sDom && (o.sDom = '<"H"lfr>t<"F"ip>'), o.renderer) ? h.isPlainObject(o.renderer) &&
            !o.renderer.header && (o.renderer.header = "jqueryui") : o.renderer = "jqueryui" : h.extend(t, m.ext.classes, g.oClasses);
          q.addClass(t.sTable);
          o.iInitDisplayStart === k && (o.iInitDisplayStart = g.iDisplayStart, o._iDisplayStart = g.iDisplayStart);
          null !== g.iDeferLoading && (o.bDeferLoading = !0, e = h.isArray(g.iDeferLoading), o._iRecordsDisplay = e ? g.iDeferLoading[0] : g.iDeferLoading, o._iRecordsTotal = e ? g.iDeferLoading[1] : g.iDeferLoading);
          var v = o.oLanguage;
          h.extend(!0, v, g.oLanguage);
          v.sUrl && (h.ajax({
            dataType: "json",
            url: v.sUrl,
            success: function (a) {
              Fa(a);
              J(l.oLanguage, a);
              h.extend(true, v, a);
              ha(o)
            },
            error: function () {
              ha(o)
            }
          }), n = !0);
          null === g.asStripeClasses && (o.asStripeClasses = [t.sStripeOdd, t.sStripeEven]);
          var e = o.asStripeClasses,
            x = q.children("tbody").find("tr").eq(0); - 1 !== h.inArray(!0, h.map(e, function (a) {
            return x.hasClass(a)
          })) && (h("tbody tr", this).removeClass(e.join(" ")), o.asDestroyStripes = e.slice());
          e = [];
          r = this.getElementsByTagName("thead");
          0 !== r.length && (ea(o.aoHeader, r[0]), e = ta(o));
          if (null === g.aoColumns) {
            r = [];
            j = 0;
            for (i = e.length; j < i; j++) r.push(null)
          } else r =
            g.aoColumns;
          j = 0;
          for (i = r.length; j < i; j++) Ga(o, e ? e[j] : null);
          kb(o, g.aoColumnDefs, r, function (a, b) {
            la(o, a, b)
          });
          if (x.length) {
            var w = function (a, b) {
              return a.getAttribute("data-" + b) !== null ? b : null
            };
            h(x[0]).children("th, td").each(function (a, b) {
              var c = o.aoColumns[a];
              if (c.mData === a) {
                var d = w(b, "sort") || w(b, "order"),
                  e = w(b, "filter") || w(b, "search");
                if (d !== null || e !== null) {
                  c.mData = {
                    _: a + ".display",
                    sort: d !== null ? a + ".@data-" + d : k,
                    type: d !== null ? a + ".@data-" + d : k,
                    filter: e !== null ? a + ".@data-" + e : k
                  };
                  la(o, a)
                }
              }
            })
          }
          var U = o.oFeatures,
            e = function () {
              if (g.aaSorting === k) {
                var a = o.aaSorting;
                j = 0;
                for (i = a.length; j < i; j++) a[j][1] = o.aoColumns[j].asSorting[0]
              }
              ya(o);
              U.bSort && z(o, "aoDrawCallback", function () {
                if (o.bSorted) {
                  var a = W(o),
                    b = {};
                  h.each(a, function (a, c) {
                    b[c.src] = c.dir
                  });
                  s(o, null, "order", [o, a, b]);
                  Kb(o)
                }
              });
              z(o, "aoDrawCallback", function () {
                (o.bSorted || y(o) === "ssp" || U.bDeferRender) && ya(o)
              }, "sc");
              var a = q.children("caption").each(function () {
                  this._captionSide = h(this).css("caption-side")
                }),
                b = q.children("thead");
              b.length === 0 && (b = h("<thead/>").appendTo(q));
              o.nTHead = b[0];
              b = q.children("tbody");
              b.length === 0 && (b = h("<tbody/>").appendTo(q));
              o.nTBody = b[0];
              b = q.children("tfoot");
              if (b.length === 0 && a.length > 0 && (o.oScroll.sX !== "" || o.oScroll.sY !== "")) b = h("<tfoot/>").appendTo(q);
              if (b.length === 0 || b.children().length === 0) q.addClass(t.sNoFooter);
              else if (b.length > 0) {
                o.nTFoot = b[0];
                ea(o.aoFooter, o.nTFoot)
              }
              if (g.aaData)
                for (j = 0; j < g.aaData.length; j++) N(o, g.aaData[j]);
              else(o.bDeferLoading || y(o) == "dom") && oa(o, h(o.nTBody).children("tr"));
              o.aiDisplay = o.aiDisplayMaster.slice();
              o.bInitialised = true;
              n === false && ha(o)
            };
          g.bStateSave ? (U.bStateSave = !0, z(o, "aoDrawCallback", za, "state_save"), Lb(o, g, e)) : e()
        }
      });
      b = null;
      return this
    },
    x, u, p, t, $a = {},
    Pb = /[\r\n]/g,
    Ca = /<.*?>/g,
    cc = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
    dc = RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)", "g"),
    Za = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
    M = function (a) {
      return !a || !0 === a || "-" === a ? !0 : !1
    },
    Qb = function (a) {
      var b = parseInt(a, 10);
      return !isNaN(b) &&
        isFinite(a) ? b : null
    },
    Rb = function (a, b) {
      $a[b] || ($a[b] = RegExp(Sa(b), "g"));
      return "string" === typeof a && "." !== b ? a.replace(/\./g, "").replace($a[b], ".") : a
    },
    ab = function (a, b, c) {
      var d = "string" === typeof a;
      if (M(a)) return !0;
      b && d && (a = Rb(a, b));
      c && d && (a = a.replace(Za, ""));
      return !isNaN(parseFloat(a)) && isFinite(a)
    },
    Sb = function (a, b, c) {
      return M(a) ? !0 : !(M(a) || "string" === typeof a) ? null : ab(a.replace(Ca, ""), b, c) ? !0 : null
    },
    D = function (a, b, c) {
      var d = [],
        e = 0,
        f = a.length;
      if (c !== k)
        for (; e < f; e++) a[e] && a[e][b] && d.push(a[e][b][c]);
      else
        for (; e <
          f; e++) a[e] && d.push(a[e][b]);
      return d
    },
    ja = function (a, b, c, d) {
      var e = [],
        f = 0,
        g = b.length;
      if (d !== k)
        for (; f < g; f++) a[b[f]][c] && e.push(a[b[f]][c][d]);
      else
        for (; f < g; f++) e.push(a[b[f]][c]);
      return e
    },
    X = function (a, b) {
      var c = [],
        d;
      b === k ? (b = 0, d = a) : (d = b, b = a);
      for (var e = b; e < d; e++) c.push(e);
      return c
    },
    Tb = function (a) {
      for (var b = [], c = 0, d = a.length; c < d; c++) a[c] && b.push(a[c]);
      return b
    },
    sa = function (a) {
      var b = [],
        c, d, e = a.length,
        f, g = 0;
      d = 0;
      a: for (; d < e; d++) {
        c = a[d];
        for (f = 0; f < g; f++)
          if (b[f] === c) continue a;
        b.push(c);
        g++
      }
      return b
    };
  m.util = {
    throttle: function (a, b) {
      var c = b !== k ? b : 200,
        d, e;
      return function () {
        var b = this,
          g = +new Date,
          h = arguments;
        d && g < d + c ? (clearTimeout(e), e = setTimeout(function () {
          d = k;
          a.apply(b, h)
        }, c)) : (d = g, a.apply(b, h))
      }
    },
    escapeRegex: function (a) {
      return a.replace(dc, "\\$1")
    }
  };
  var A = function (a, b, c) {
      a[b] !== k && (a[c] = a[b])
    },
    ca = /\[.*?\]$/,
    V = /\(\)$/,
    Sa = m.util.escapeRegex,
    xa = h("<div>")[0],
    $b = xa.textContent !== k,
    bc = /<.*?>/g,
    Qa = m.util.throttle,
    Ub = [],
    w = Array.prototype,
    ec = function (a) {
      var b, c, d = m.settings,
        e = h.map(d, function (a) {
          return a.nTable
        });
      if (a) {
        if (a.nTable && a.oApi) return [a];
        if (a.nodeName && "table" === a.nodeName.toLowerCase()) return b = h.inArray(a, e), -1 !== b ? [d[b]] : null;
        if (a && "function" === typeof a.settings) return a.settings().toArray();
        "string" === typeof a ? c = h(a) : a instanceof h && (c = a)
      } else return [];
      if (c) return c.map(function () {
        b = h.inArray(this, e);
        return -1 !== b ? d[b] : null
      }).toArray()
    };
  u = function (a, b) {
    if (!(this instanceof u)) return new u(a, b);
    var c = [],
      d = function (a) {
        (a = ec(a)) && (c = c.concat(a))
      };
    if (h.isArray(a))
      for (var e = 0, f = a.length; e < f; e++) d(a[e]);
    else d(a);
    this.context = sa(c);
    b && h.merge(this, b);
    this.selector = {
      rows: null,
      cols: null,
      opts: null
    };
    u.extend(this, this, Ub)
  };
  m.Api = u;
  h.extend(u.prototype, {
    any: function () {
      return 0 !== this.count()
    },
    concat: w.concat,
    context: [],
    count: function () {
      return this.flatten().length
    },
    each: function (a) {
      for (var b = 0, c = this.length; b < c; b++) a.call(this, this[b], b, this);
      return this
    },
    eq: function (a) {
      var b = this.context;
      return b.length > a ? new u(b[a], this[a]) : null
    },
    filter: function (a) {
      var b = [];
      if (w.filter) b = w.filter.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++) a.call(this, this[c], c, this) && b.push(this[c]);
      return new u(this.context, b)
    },
    flatten: function () {
      var a = [];
      return new u(this.context, a.concat.apply(a, this.toArray()))
    },
    join: w.join,
    indexOf: w.indexOf || function (a, b) {
      for (var c = b || 0, d = this.length; c < d; c++)
        if (this[c] === a) return c;
      return -1
    },
    iterator: function (a, b, c, d) {
      var e = [],
        f, g, h, i, n, l = this.context,
        m, p, t = this.selector;
      "string" === typeof a && (d = c, c = b, b = a, a = !1);
      g = 0;
      for (h = l.length; g < h; g++) {
        var s = new u(l[g]);
        if ("table" === b) f =
          c.call(s, l[g], g), f !== k && e.push(f);
        else if ("columns" === b || "rows" === b) f = c.call(s, l[g], this[g], g), f !== k && e.push(f);
        else if ("column" === b || "column-rows" === b || "row" === b || "cell" === b) {
          p = this[g];
          "column-rows" === b && (m = Da(l[g], t.opts));
          i = 0;
          for (n = p.length; i < n; i++) f = p[i], f = "cell" === b ? c.call(s, l[g], f.row, f.column, g, i) : c.call(s, l[g], f, g, i, m), f !== k && e.push(f)
        }
      }
      return e.length || d ? (a = new u(l, a ? e.concat.apply([], e) : e), b = a.selector, b.rows = t.rows, b.cols = t.cols, b.opts = t.opts, a) : this
    },
    lastIndexOf: w.lastIndexOf || function (a,
      b) {
      return this.indexOf.apply(this.toArray.reverse(), arguments)
    },
    length: 0,
    map: function (a) {
      var b = [];
      if (w.map) b = w.map.call(this, a, this);
      else
        for (var c = 0, d = this.length; c < d; c++) b.push(a.call(this, this[c], c));
      return new u(this.context, b)
    },
    pluck: function (a) {
      return this.map(function (b) {
        return b[a]
      })
    },
    pop: w.pop,
    push: w.push,
    reduce: w.reduce || function (a, b) {
      return jb(this, a, b, 0, this.length, 1)
    },
    reduceRight: w.reduceRight || function (a, b) {
      return jb(this, a, b, this.length - 1, -1, -1)
    },
    reverse: w.reverse,
    selector: null,
    shift: w.shift,
    sort: w.sort,
    splice: w.splice,
    toArray: function () {
      return w.slice.call(this)
    },
    to$: function () {
      return h(this)
    },
    toJQuery: function () {
      return h(this)
    },
    unique: function () {
      return new u(this.context, sa(this))
    },
    unshift: w.unshift
  });
  u.extend = function (a, b, c) {
    if (c.length && b && (b instanceof u || b.__dt_wrapper)) {
      var d, e, f, g = function (a, b, c) {
        return function () {
          var d = b.apply(a, arguments);
          u.extend(d, d, c.methodExt);
          return d
        }
      };
      d = 0;
      for (e = c.length; d < e; d++) f = c[d], b[f.name] = "function" === typeof f.val ? g(a, f.val, f) : h.isPlainObject(f.val) ? {} : f.val, b[f.name].__dt_wrapper = !0, u.extend(a, b[f.name], f.propExt)
    }
  };
  u.register = p = function (a, b) {
    if (h.isArray(a))
      for (var c = 0, d = a.length; c < d; c++) u.register(a[c], b);
    else
      for (var e = a.split("."), f = Ub, g, j, c = 0, d = e.length; c < d; c++) {
        g = (j = -1 !== e[c].indexOf("()")) ? e[c].replace("()", "") : e[c];
        var i;
        a: {
          i = 0;
          for (var n = f.length; i < n; i++)
            if (f[i].name === g) {
              i = f[i];
              break a
            }
          i = null
        }
        i || (i = {
          name: g,
          val: {},
          methodExt: [],
          propExt: []
        }, f.push(i));
        c === d - 1 ? i.val = b : f = j ? i.methodExt : i.propExt
      }
  };
  u.registerPlural = t = function (a, b, c) {
    u.register(a,
      c);
    u.register(b, function () {
      var a = c.apply(this, arguments);
      return a === this ? this : a instanceof u ? a.length ? h.isArray(a[0]) ? new u(a.context, a[0]) : a[0] : k : a
    })
  };
  p("tables()", function (a) {
    var b;
    if (a) {
      b = u;
      var c = this.context;
      if ("number" === typeof a) a = [c[a]];
      else var d = h.map(c, function (a) {
          return a.nTable
        }),
        a = h(d).filter(a).map(function () {
          var a = h.inArray(this, d);
          return c[a]
        }).toArray();
      b = new b(a)
    } else b = this;
    return b
  });
  p("table()", function (a) {
    var a = this.tables(a),
      b = a.context;
    return b.length ? new u(b[0]) : a
  });
  t("tables().nodes()",
    "table().node()",
    function () {
      return this.iterator("table", function (a) {
        return a.nTable
      }, 1)
    });
  t("tables().body()", "table().body()", function () {
    return this.iterator("table", function (a) {
      return a.nTBody
    }, 1)
  });
  t("tables().header()", "table().header()", function () {
    return this.iterator("table", function (a) {
      return a.nTHead
    }, 1)
  });
  t("tables().footer()", "table().footer()", function () {
    return this.iterator("table", function (a) {
      return a.nTFoot
    }, 1)
  });
  t("tables().containers()", "table().container()", function () {
    return this.iterator("table",
      function (a) {
        return a.nTableWrapper
      }, 1)
  });
  p("draw()", function (a) {
    return this.iterator("table", function (b) {
      "page" === a ? O(b) : ("string" === typeof a && (a = "full-hold" === a ? !1 : !0), T(b, !1 === a))
    })
  });
  p("page()", function (a) {
    return a === k ? this.page.info().page : this.iterator("table", function (b) {
      Va(b, a)
    })
  });
  p("page.info()", function () {
    if (0 === this.context.length) return k;
    var a = this.context[0],
      b = a._iDisplayStart,
      c = a.oFeatures.bPaginate ? a._iDisplayLength : -1,
      d = a.fnRecordsDisplay(),
      e = -1 === c;
    return {
      page: e ? 0 : Math.floor(b / c),
      pages: e ? 1 : Math.ceil(d / c),
      start: b,
      end: a.fnDisplayEnd(),
      length: c,
      recordsTotal: a.fnRecordsTotal(),
      recordsDisplay: d,
      serverSide: "ssp" === y(a)
    }
  });
  p("page.len()", function (a) {
    return a === k ? 0 !== this.context.length ? this.context[0]._iDisplayLength : k : this.iterator("table", function (b) {
      Ta(b, a)
    })
  });
  var Vb = function (a, b, c) {
    if (c) {
      var d = new u(a);
      d.one("draw", function () {
        c(d.ajax.json())
      })
    }
    if ("ssp" == y(a)) T(a, b);
    else {
      C(a, !0);
      var e = a.jqXHR;
      e && 4 !== e.readyState && e.abort();
      ua(a, [], function (c) {
        pa(a);
        for (var c = va(a, c), d = 0, e = c.length; d <
          e; d++) N(a, c[d]);
        T(a, b);
        C(a, !1)
      })
    }
  };
  p("ajax.json()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].json
  });
  p("ajax.params()", function () {
    var a = this.context;
    if (0 < a.length) return a[0].oAjaxData
  });
  p("ajax.reload()", function (a, b) {
    return this.iterator("table", function (c) {
      Vb(c, !1 === b, a)
    })
  });
  p("ajax.url()", function (a) {
    var b = this.context;
    if (a === k) {
      if (0 === b.length) return k;
      b = b[0];
      return b.ajax ? h.isPlainObject(b.ajax) ? b.ajax.url : b.ajax : b.sAjaxSource
    }
    return this.iterator("table", function (b) {
      h.isPlainObject(b.ajax) ?
        b.ajax.url = a : b.ajax = a
    })
  });
  p("ajax.url().load()", function (a, b) {
    return this.iterator("table", function (c) {
      Vb(c, !1 === b, a)
    })
  });
  var bb = function (a, b, c, d, e) {
      var f = [],
        g, j, i, n, l, m;
      i = typeof b;
      if (!b || "string" === i || "function" === i || b.length === k) b = [b];
      i = 0;
      for (n = b.length; i < n; i++) {
        j = b[i] && b[i].split && !b[i].match(/[\[\(:]/) ? b[i].split(",") : [b[i]];
        l = 0;
        for (m = j.length; l < m; l++)(g = c("string" === typeof j[l] ? h.trim(j[l]) : j[l])) && g.length && (f = f.concat(g))
      }
      a = x.selector[a];
      if (a.length) {
        i = 0;
        for (n = a.length; i < n; i++) f = a[i](d, e, f)
      }
      return sa(f)
    },
    cb = function (a) {
      a || (a = {});
      a.filter && a.search === k && (a.search = a.filter);
      return h.extend({
        search: "none",
        order: "current",
        page: "all"
      }, a)
    },
    db = function (a) {
      for (var b = 0, c = a.length; b < c; b++)
        if (0 < a[b].length) return a[0] = a[b], a[0].length = 1, a.length = 1, a.context = [a.context[b]], a;
      a.length = 0;
      return a
    },
    Da = function (a, b) {
      var c, d, e, f = [],
        g = a.aiDisplay;
      c = a.aiDisplayMaster;
      var j = b.search;
      d = b.order;
      e = b.page;
      if ("ssp" == y(a)) return "removed" === j ? [] : X(0, c.length);
      if ("current" == e) {
        c = a._iDisplayStart;
        for (d = a.fnDisplayEnd(); c < d; c++) f.push(g[c])
      } else if ("current" ==
        d || "applied" == d) f = "none" == j ? c.slice() : "applied" == j ? g.slice() : h.map(c, function (a) {
        return -1 === h.inArray(a, g) ? a : null
      });
      else if ("index" == d || "original" == d) {
        c = 0;
        for (d = a.aoData.length; c < d; c++) "none" == j ? f.push(c) : (e = h.inArray(c, g), (-1 === e && "removed" == j || 0 <= e && "applied" == j) && f.push(c))
      }
      return f
    };
  p("rows()", function (a, b) {
    a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
    var b = cb(b),
      c = this.iterator("table", function (c) {
        var e = b,
          f;
        return bb("row", a, function (a) {
            var b = Qb(a);
            if (b !== null && !e) return [b];
            f || (f = Da(c, e));
            if (b !==
              null && h.inArray(b, f) !== -1) return [b];
            if (a === null || a === k || a === "") return f;
            if (typeof a === "function") return h.map(f, function (b) {
              var e = c.aoData[b];
              return a(b, e._aData, e.nTr) ? b : null
            });
            b = Tb(ja(c.aoData, f, "nTr"));
            if (a.nodeName) {
              if (a._DT_RowIndex !== k) return [a._DT_RowIndex];
              if (a._DT_CellIndex) return [a._DT_CellIndex.row];
              b = h(a).closest("*[data-dt-row]");
              return b.length ? [b.data("dt-row")] : []
            }
            if (typeof a === "string" && a.charAt(0) === "#") {
              var i = c.aIds[a.replace(/^#/, "")];
              if (i !== k) return [i.idx]
            }
            return h(b).filter(a).map(function () {
              return this._DT_RowIndex
            }).toArray()
          },
          c, e)
      }, 1);
    c.selector.rows = a;
    c.selector.opts = b;
    return c
  });
  p("rows().nodes()", function () {
    return this.iterator("row", function (a, b) {
      return a.aoData[b].nTr || k
    }, 1)
  });
  p("rows().data()", function () {
    return this.iterator(!0, "rows", function (a, b) {
      return ja(a.aoData, b, "_aData")
    }, 1)
  });
  t("rows().cache()", "row().cache()", function (a) {
    return this.iterator("row", function (b, c) {
      var d = b.aoData[c];
      return "search" === a ? d._aFilterData : d._aSortData
    }, 1)
  });
  t("rows().invalidate()", "row().invalidate()", function (a) {
    return this.iterator("row",
      function (b, c) {
        da(b, c, a)
      })
  });
  t("rows().indexes()", "row().index()", function () {
    return this.iterator("row", function (a, b) {
      return b
    }, 1)
  });
  t("rows().ids()", "row().id()", function (a) {
    for (var b = [], c = this.context, d = 0, e = c.length; d < e; d++)
      for (var f = 0, g = this[d].length; f < g; f++) {
        var h = c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);
        b.push((!0 === a ? "#" : "") + h)
      }
    return new u(c, b)
  });
  t("rows().remove()", "row().remove()", function () {
    var a = this;
    this.iterator("row", function (b, c, d) {
      var e = b.aoData,
        f = e[c],
        g, h, i, n, l;
      e.splice(c, 1);
      g = 0;
      for (h = e.length; g < h; g++)
        if (i = e[g], l = i.anCells, null !== i.nTr && (i.nTr._DT_RowIndex = g), null !== l) {
          i = 0;
          for (n = l.length; i < n; i++) l[i]._DT_CellIndex.row = g
        }
      qa(b.aiDisplayMaster, c);
      qa(b.aiDisplay, c);
      qa(a[d], c, !1);
      Ua(b);
      c = b.rowIdFn(f._aData);
      c !== k && delete b.aIds[c]
    });
    this.iterator("table", function (a) {
      for (var c = 0, d = a.aoData.length; c < d; c++) a.aoData[c].idx = c
    });
    return this
  });
  p("rows.add()", function (a) {
    var b = this.iterator("table", function (b) {
        var c, f, g, h = [];
        f = 0;
        for (g = a.length; f < g; f++) c = a[f], c.nodeName && "TR" === c.nodeName.toUpperCase() ?
          h.push(oa(b, c)[0]) : h.push(N(b, c));
        return h
      }, 1),
      c = this.rows(-1);
    c.pop();
    h.merge(c, b);
    return c
  });
  p("row()", function (a, b) {
    return db(this.rows(a, b))
  });
  p("row().data()", function (a) {
    var b = this.context;
    if (a === k) return b.length && this.length ? b[0].aoData[this[0]]._aData : k;
    b[0].aoData[this[0]]._aData = a;
    da(b[0], this[0], "data");
    return this
  });
  p("row().node()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]].nTr || null : null
  });
  p("row.add()", function (a) {
    a instanceof h && a.length && (a = a[0]);
    var b = this.iterator("table", function (b) {
      return a.nodeName && "TR" === a.nodeName.toUpperCase() ? oa(b, a)[0] : N(b, a)
    });
    return this.row(b[0])
  });
  var eb = function (a, b) {
      var c = a.context;
      if (c.length && (c = c[0].aoData[b !== k ? b : a[0]]) && c._details) c._details.remove(), c._detailsShow = k, c._details = k
    },
    Wb = function (a, b) {
      var c = a.context;
      if (c.length && a.length) {
        var d = c[0].aoData[a[0]];
        if (d._details) {
          (d._detailsShow = b) ? d._details.insertAfter(d.nTr): d._details.detach();
          var e = c[0],
            f = new u(e),
            g = e.aoData;
          f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");
          0 < D(g, "_details").length && (f.on("draw.dt.DT_details", function (a, b) {
            e === b && f.rows({
              page: "current"
            }).eq(0).each(function (a) {
              a = g[a];
              a._detailsShow && a._details.insertAfter(a.nTr)
            })
          }), f.on("column-visibility.dt.DT_details", function (a, b) {
            if (e === b)
              for (var c, d = ba(b), f = 0, h = g.length; f < h; f++) c = g[f], c._details && c._details.children("td[colspan]").attr("colspan", d)
          }), f.on("destroy.dt.DT_details", function (a, b) {
            if (e === b)
              for (var c = 0, d = g.length; c < d; c++) g[c]._details && eb(f, c)
          }))
        }
      }
    };
  p("row().child()", function (a, b) {
    var c =
      this.context;
    if (a === k) return c.length && this.length ? c[0].aoData[this[0]]._details : k;
    if (!0 === a) this.child.show();
    else if (!1 === a) eb(this);
    else if (c.length && this.length) {
      var d = c[0],
        c = c[0].aoData[this[0]],
        e = [],
        f = function (a, b) {
          if (h.isArray(a) || a instanceof h)
            for (var c = 0, k = a.length; c < k; c++) f(a[c], b);
          else a.nodeName && "tr" === a.nodeName.toLowerCase() ? e.push(a) : (c = h("<tr><td/></tr>").addClass(b), h("td", c).addClass(b).html(a)[0].colSpan = ba(d), e.push(c[0]))
        };
      f(a, b);
      c._details && c._details.detach();
      c._details = h(e);
      c._detailsShow && c._details.insertAfter(c.nTr)
    }
    return this
  });
  p(["row().child.show()", "row().child().show()"], function () {
    Wb(this, !0);
    return this
  });
  p(["row().child.hide()", "row().child().hide()"], function () {
    Wb(this, !1);
    return this
  });
  p(["row().child.remove()", "row().child().remove()"], function () {
    eb(this);
    return this
  });
  p("row().child.isShown()", function () {
    var a = this.context;
    return a.length && this.length ? a[0].aoData[this[0]]._detailsShow || !1 : !1
  });
  var fc = /^([^:]+):(name|visIdx|visible)$/,
    Xb = function (a, b,
      c, d, e) {
      for (var c = [], d = 0, f = e.length; d < f; d++) c.push(B(a, e[d], b));
      return c
    };
  p("columns()", function (a, b) {
    a === k ? a = "" : h.isPlainObject(a) && (b = a, a = "");
    var b = cb(b),
      c = this.iterator("table", function (c) {
          var e = a,
            f = b,
            g = c.aoColumns,
            j = D(g, "sName"),
            i = D(g, "nTh");
          return bb("column", e, function (a) {
            var b = Qb(a);
            if (a === "") return X(g.length);
            if (b !== null) return [b >= 0 ? b : g.length + b];
            if (typeof a === "function") {
              var e = Da(c, f);
              return h.map(g, function (b, f) {
                return a(f, Xb(c, f, 0, 0, e), i[f]) ? f : null
              })
            }
            var k = typeof a === "string" ? a.match(fc) :
              "";
            if (k) switch (k[2]) {
              case "visIdx":
              case "visible":
                b = parseInt(k[1], 10);
                if (b < 0) {
                  var m = h.map(g, function (a, b) {
                    return a.bVisible ? b : null
                  });
                  return [m[m.length + b]]
                }
                return [$(c, b)];
              case "name":
                return h.map(j, function (a, b) {
                  return a === k[1] ? b : null
                });
              default:
                return []
            }
            if (a.nodeName && a._DT_CellIndex) return [a._DT_CellIndex.column];
            b = h(i).filter(a).map(function () {
              return h.inArray(this, i)
            }).toArray();
            if (b.length || !a.nodeName) return b;
            b = h(a).closest("*[data-dt-column]");
            return b.length ? [b.data("dt-column")] : []
          }, c, f)
        },
        1);
    c.selector.cols = a;
    c.selector.opts = b;
    return c
  });
  t("columns().header()", "column().header()", function () {
    return this.iterator("column", function (a, b) {
      return a.aoColumns[b].nTh
    }, 1)
  });
  t("columns().footer()", "column().footer()", function () {
    return this.iterator("column", function (a, b) {
      return a.aoColumns[b].nTf
    }, 1)
  });
  t("columns().data()", "column().data()", function () {
    return this.iterator("column-rows", Xb, 1)
  });
  t("columns().dataSrc()", "column().dataSrc()", function () {
    return this.iterator("column", function (a, b) {
        return a.aoColumns[b].mData
      },
      1)
  });
  t("columns().cache()", "column().cache()", function (a) {
    return this.iterator("column-rows", function (b, c, d, e, f) {
      return ja(b.aoData, f, "search" === a ? "_aFilterData" : "_aSortData", c)
    }, 1)
  });
  t("columns().nodes()", "column().nodes()", function () {
    return this.iterator("column-rows", function (a, b, c, d, e) {
      return ja(a.aoData, e, "anCells", b)
    }, 1)
  });
  t("columns().visible()", "column().visible()", function (a, b) {
    var c = this.iterator("column", function (b, c) {
      if (a === k) return b.aoColumns[c].bVisible;
      var f = b.aoColumns,
        g = f[c],
        j = b.aoData,
        i, n, l;
      if (a !== k && g.bVisible !== a) {
        if (a) {
          var m = h.inArray(!0, D(f, "bVisible"), c + 1);
          i = 0;
          for (n = j.length; i < n; i++) l = j[i].nTr, f = j[i].anCells, l && l.insertBefore(f[c], f[m] || null)
        } else h(D(b.aoData, "anCells", c)).detach();
        g.bVisible = a;
        fa(b, b.aoHeader);
        fa(b, b.aoFooter);
        za(b)
      }
    });
    a !== k && (this.iterator("column", function (c, e) {
      s(c, null, "column-visibility", [c, e, a, b])
    }), (b === k || b) && this.columns.adjust());
    return c
  });
  t("columns().indexes()", "column().index()", function (a) {
    return this.iterator("column", function (b, c) {
      return "visible" ===
        a ? aa(b, c) : c
    }, 1)
  });
  p("columns.adjust()", function () {
    return this.iterator("table", function (a) {
      Z(a)
    }, 1)
  });
  p("column.index()", function (a, b) {
    if (0 !== this.context.length) {
      var c = this.context[0];
      if ("fromVisible" === a || "toData" === a) return $(c, b);
      if ("fromData" === a || "toVisible" === a) return aa(c, b)
    }
  });
  p("column()", function (a, b) {
    return db(this.columns(a, b))
  });
  p("cells()", function (a, b, c) {
    h.isPlainObject(a) && (a.row === k ? (c = a, a = null) : (c = b, b = null));
    h.isPlainObject(b) && (c = b, b = null);
    if (null === b || b === k) return this.iterator("table",
      function (b) {
        var d = a,
          e = cb(c),
          f = b.aoData,
          g = Da(b, e),
          i = Tb(ja(f, g, "anCells")),
          j = h([].concat.apply([], i)),
          l, n = b.aoColumns.length,
          m, p, t, u, s, v;
        return bb("cell", d, function (a) {
          var c = typeof a === "function";
          if (a === null || a === k || c) {
            m = [];
            p = 0;
            for (t = g.length; p < t; p++) {
              l = g[p];
              for (u = 0; u < n; u++) {
                s = {
                  row: l,
                  column: u
                };
                if (c) {
                  v = f[l];
                  a(s, B(b, l, u), v.anCells ? v.anCells[u] : null) && m.push(s)
                } else m.push(s)
              }
            }
            return m
          }
          if (h.isPlainObject(a)) return [a];
          c = j.filter(a).map(function (a, b) {
            return {
              row: b._DT_CellIndex.row,
              column: b._DT_CellIndex.column
            }
          }).toArray();
          if (c.length || !a.nodeName) return c;
          v = h(a).closest("*[data-dt-row]");
          return v.length ? [{
            row: v.data("dt-row"),
            column: v.data("dt-column")
          }] : []
        }, b, e)
      });
    var d = this.columns(b, c),
      e = this.rows(a, c),
      f, g, j, i, n, l = this.iterator("table", function (a, b) {
        f = [];
        g = 0;
        for (j = e[b].length; g < j; g++) {
          i = 0;
          for (n = d[b].length; i < n; i++) f.push({
            row: e[b][g],
            column: d[b][i]
          })
        }
        return f
      }, 1);
    h.extend(l.selector, {
      cols: b,
      rows: a,
      opts: c
    });
    return l
  });
  t("cells().nodes()", "cell().node()", function () {
    return this.iterator("cell", function (a, b, c) {
      return (a =
        a.aoData[b]) && a.anCells ? a.anCells[c] : k
    }, 1)
  });
  p("cells().data()", function () {
    return this.iterator("cell", function (a, b, c) {
      return B(a, b, c)
    }, 1)
  });
  t("cells().cache()", "cell().cache()", function (a) {
    a = "search" === a ? "_aFilterData" : "_aSortData";
    return this.iterator("cell", function (b, c, d) {
      return b.aoData[c][a][d]
    }, 1)
  });
  t("cells().render()", "cell().render()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      return B(b, c, d, a)
    }, 1)
  });
  t("cells().indexes()", "cell().index()", function () {
    return this.iterator("cell",
      function (a, b, c) {
        return {
          row: b,
          column: c,
          columnVisible: aa(a, c)
        }
      }, 1)
  });
  t("cells().invalidate()", "cell().invalidate()", function (a) {
    return this.iterator("cell", function (b, c, d) {
      da(b, c, a, d)
    })
  });
  p("cell()", function (a, b, c) {
    return db(this.cells(a, b, c))
  });
  p("cell().data()", function (a) {
    var b = this.context,
      c = this[0];
    if (a === k) return b.length && c.length ? B(b[0], c[0].row, c[0].column) : k;
    lb(b[0], c[0].row, c[0].column, a);
    da(b[0], c[0].row, "data", c[0].column);
    return this
  });
  p("order()", function (a, b) {
    var c = this.context;
    if (a ===
      k) return 0 !== c.length ? c[0].aaSorting : k;
    "number" === typeof a ? a = [
      [a, b]
    ] : a.length && !h.isArray(a[0]) && (a = Array.prototype.slice.call(arguments));
    return this.iterator("table", function (b) {
      b.aaSorting = a.slice()
    })
  });
  p("order.listener()", function (a, b, c) {
    return this.iterator("table", function (d) {
      Oa(d, a, b, c)
    })
  });
  p("order.fixed()", function (a) {
    if (!a) {
      var b = this.context,
        b = b.length ? b[0].aaSortingFixed : k;
      return h.isArray(b) ? {
        pre: b
      } : b
    }
    return this.iterator("table", function (b) {
      b.aaSortingFixed = h.extend(!0, {}, a)
    })
  });
  p(["columns().order()",
    "column().order()"
  ], function (a) {
    var b = this;
    return this.iterator("table", function (c, d) {
      var e = [];
      h.each(b[d], function (b, c) {
        e.push([c, a])
      });
      c.aaSorting = e
    })
  });
  p("search()", function (a, b, c, d) {
    var e = this.context;
    return a === k ? 0 !== e.length ? e[0].oPreviousSearch.sSearch : k : this.iterator("table", function (e) {
      e.oFeatures.bFilter && ga(e, h.extend({}, e.oPreviousSearch, {
        sSearch: a + "",
        bRegex: null === b ? !1 : b,
        bSmart: null === c ? !0 : c,
        bCaseInsensitive: null === d ? !0 : d
      }), 1)
    })
  });
  t("columns().search()", "column().search()", function (a,
    b, c, d) {
    return this.iterator("column", function (e, f) {
      var g = e.aoPreSearchCols;
      if (a === k) return g[f].sSearch;
      e.oFeatures.bFilter && (h.extend(g[f], {
        sSearch: a + "",
        bRegex: null === b ? !1 : b,
        bSmart: null === c ? !0 : c,
        bCaseInsensitive: null === d ? !0 : d
      }), ga(e, e.oPreviousSearch, 1))
    })
  });
  p("state()", function () {
    return this.context.length ? this.context[0].oSavedState : null
  });
  p("state.clear()", function () {
    return this.iterator("table", function (a) {
      a.fnStateSaveCallback.call(a.oInstance, a, {})
    })
  });
  p("state.loaded()", function () {
    return this.context.length ?
      this.context[0].oLoadedState : null
  });
  p("state.save()", function () {
    return this.iterator("table", function (a) {
      za(a)
    })
  });
  m.versionCheck = m.fnVersionCheck = function (a) {
    for (var b = m.version.split("."), a = a.split("."), c, d, e = 0, f = a.length; e < f; e++)
      if (c = parseInt(b[e], 10) || 0, d = parseInt(a[e], 10) || 0, c !== d) return c > d;
    return !0
  };
  m.isDataTable = m.fnIsDataTable = function (a) {
    var b = h(a).get(0),
      c = !1;
    if (a instanceof m.Api) return !0;
    h.each(m.settings, function (a, e) {
      var f = e.nScrollHead ? h("table", e.nScrollHead)[0] : null,
        g = e.nScrollFoot ?
        h("table", e.nScrollFoot)[0] : null;
      if (e.nTable === b || f === b || g === b) c = !0
    });
    return c
  };
  m.tables = m.fnTables = function (a) {
    var b = !1;
    h.isPlainObject(a) && (b = a.api, a = a.visible);
    var c = h.map(m.settings, function (b) {
      if (!a || a && h(b.nTable).is(":visible")) return b.nTable
    });
    return b ? new u(c) : c
  };
  m.camelToHungarian = J;
  p("$()", function (a, b) {
    var c = this.rows(b).nodes(),
      c = h(c);
    return h([].concat(c.filter(a).toArray(), c.find(a).toArray()))
  });
  h.each(["on", "one", "off"], function (a, b) {
    p(b + "()", function () {
      var a = Array.prototype.slice.call(arguments);
      a[0] = h.map(a[0].split(/\s/), function (a) {
        return !a.match(/\.dt\b/) ? a + ".dt" : a
      }).join(" ");
      var d = h(this.tables().nodes());
      d[b].apply(d, a);
      return this
    })
  });
  p("clear()", function () {
    return this.iterator("table", function (a) {
      pa(a)
    })
  });
  p("settings()", function () {
    return new u(this.context, this.context)
  });
  p("init()", function () {
    var a = this.context;
    return a.length ? a[0].oInit : null
  });
  p("data()", function () {
    return this.iterator("table", function (a) {
      return D(a.aoData, "_aData")
    }).flatten()
  });
  p("destroy()", function (a) {
    a = a ||
      !1;
    return this.iterator("table", function (b) {
      var c = b.nTableWrapper.parentNode,
        d = b.oClasses,
        e = b.nTable,
        f = b.nTBody,
        g = b.nTHead,
        j = b.nTFoot,
        i = h(e),
        f = h(f),
        k = h(b.nTableWrapper),
        l = h.map(b.aoData, function (a) {
          return a.nTr
        }),
        p;
      b.bDestroying = !0;
      s(b, "aoDestroyCallback", "destroy", [b]);
      a || (new u(b)).columns().visible(!0);
      k.off(".DT").find(":not(tbody *)").off(".DT");
      h(E).off(".DT-" + b.sInstance);
      e != g.parentNode && (i.children("thead").detach(), i.append(g));
      j && e != j.parentNode && (i.children("tfoot").detach(), i.append(j));
      b.aaSorting = [];
      b.aaSortingFixed = [];
      ya(b);
      h(l).removeClass(b.asStripeClasses.join(" "));
      h("th, td", g).removeClass(d.sSortable + " " + d.sSortableAsc + " " + d.sSortableDesc + " " + d.sSortableNone);
      b.bJUI && (h("th span." + d.sSortIcon + ", td span." + d.sSortIcon, g).detach(), h("th, td", g).each(function () {
        var a = h("div." + d.sSortJUIWrapper, this);
        h(this).append(a.contents());
        a.detach()
      }));
      f.children().detach();
      f.append(l);
      g = a ? "remove" : "detach";
      i[g]();
      k[g]();
      !a && c && (c.insertBefore(e, b.nTableReinsertBefore), i.css("width",
        b.sDestroyWidth).removeClass(d.sTable), (p = b.asDestroyStripes.length) && f.children().each(function (a) {
        h(this).addClass(b.asDestroyStripes[a % p])
      }));
      c = h.inArray(b, m.settings); - 1 !== c && m.settings.splice(c, 1)
    })
  });
  h.each(["column", "row", "cell"], function (a, b) {
    p(b + "s().every()", function (a) {
      var d = this.selector.opts,
        e = this;
      return this.iterator(b, function (f, g, h, i, m) {
        a.call(e[b](g, "cell" === b ? h : d, "cell" === b ? d : k), g, h, i, m)
      })
    })
  });
  p("i18n()", function (a, b, c) {
    var d = this.context[0],
      a = R(a)(d.oLanguage);
    a === k && (a = b);
    c !==
      k && h.isPlainObject(a) && (a = a[c] !== k ? a[c] : a._);
    return a.replace("%d", c)
  });
  m.version = "1.10.13";
  m.settings = [];
  m.models = {};
  m.models.oSearch = {
    bCaseInsensitive: !0,
    sSearch: "",
    bRegex: !1,
    bSmart: !0
  };
  m.models.oRow = {
    nTr: null,
    anCells: null,
    _aData: [],
    _aSortData: null,
    _aFilterData: null,
    _sFilterRow: null,
    _sRowStripe: "",
    src: null,
    idx: -1
  };
  m.models.oColumn = {
    idx: null,
    aDataSort: null,
    asSorting: null,
    bSearchable: null,
    bSortable: null,
    bVisible: null,
    _sManualType: null,
    _bAttrSrc: !1,
    fnCreatedCell: null,
    fnGetData: null,
    fnSetData: null,
    mData: null,
    mRender: null,
    nTh: null,
    nTf: null,
    sClass: null,
    sContentPadding: null,
    sDefaultContent: null,
    sName: null,
    sSortDataType: "std",
    sSortingClass: null,
    sSortingClassJUI: null,
    sTitle: null,
    sType: null,
    sWidth: null,
    sWidthOrig: null
  };
  m.defaults = {
    aaData: null,
    aaSorting: [
      [0, "asc"]
    ],
    aaSortingFixed: [],
    ajax: null,
    aLengthMenu: [10, 25, 50, 100],
    aoColumns: null,
    aoColumnDefs: null,
    aoSearchCols: [],
    asStripeClasses: null,
    bAutoWidth: !0,
    bDeferRender: !1,
    bDestroy: !1,
    bFilter: !0,
    bInfo: !0,
    bJQueryUI: !1,
    bLengthChange: !0,
    bPaginate: !0,
    bProcessing: !1,
    bRetrieve: !1,
    bScrollCollapse: !1,
    bServerSide: !1,
    bSort: !0,
    bSortMulti: !0,
    bSortCellsTop: !1,
    bSortClasses: !0,
    bStateSave: !1,
    fnCreatedRow: null,
    fnDrawCallback: null,
    fnFooterCallback: null,
    fnFormatNumber: function (a) {
      return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
    },
    fnHeaderCallback: null,
    fnInfoCallback: null,
    fnInitComplete: null,
    fnPreDrawCallback: null,
    fnRowCallback: null,
    fnServerData: null,
    fnServerParams: null,
    fnStateLoadCallback: function (a) {
      try {
        return JSON.parse((-1 === a.iStateDuration ?
          sessionStorage : localStorage).getItem("DataTables_" + a.sInstance + "_" + location.pathname))
      } catch (b) {}
    },
    fnStateLoadParams: null,
    fnStateLoaded: null,
    fnStateSaveCallback: function (a, b) {
      try {
        (-1 === a.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + a.sInstance + "_" + location.pathname, JSON.stringify(b))
      } catch (c) {}
    },
    fnStateSaveParams: null,
    iStateDuration: 7200,
    iDeferLoading: null,
    iDisplayLength: 10,
    iDisplayStart: 0,
    iTabIndex: 0,
    oClasses: {},
    oLanguage: {
      oAria: {
        sSortAscending: ": activate to sort column ascending",
        sSortDescending: ": activate to sort column descending"
      },
      oPaginate: {
        sFirst: "First",
        sLast: "Last",
        sNext: "Next",
        sPrevious: "Previous"
      },
      sEmptyTable: "No data available in table",
      sInfo: "Showing _START_ to _END_ of _TOTAL_ entries",
      sInfoEmpty: "Showing 0 to 0 of 0 entries",
      sInfoFiltered: "(filtered from _MAX_ total entries)",
      sInfoPostFix: "",
      sDecimal: "",
      sThousands: ",",
      sLengthMenu: "Show _MENU_ entries",
      sLoadingRecords: "Loading...",
      sProcessing: "Processing...",
      sSearch: "Search:",
      sSearchPlaceholder: "",
      sUrl: "",
      sZeroRecords: "No matching records found"
    },
    oSearch: h.extend({}, m.models.oSearch),
    sAjaxDataProp: "data",
    sAjaxSource: null,
    sDom: "lfrtip",
    searchDelay: null,
    sPaginationType: "simple_numbers",
    sScrollX: "",
    sScrollXInner: "",
    sScrollY: "",
    sServerMethod: "GET",
    renderer: null,
    rowId: "DT_RowId"
  };
  Y(m.defaults);
  m.defaults.column = {
    aDataSort: null,
    iDataSort: -1,
    asSorting: ["asc", "desc"],
    bSearchable: !0,
    bSortable: !0,
    bVisible: !0,
    fnCreatedCell: null,
    mData: null,
    mRender: null,
    sCellType: "td",
    sClass: "",
    sContentPadding: "",
    sDefaultContent: null,
    sName: "",
    sSortDataType: "std",
    sTitle: null,
    sType: null,
    sWidth: null
  };
  Y(m.defaults.column);
  m.models.oSettings = {
    oFeatures: {
      bAutoWidth: null,
      bDeferRender: null,
      bFilter: null,
      bInfo: null,
      bLengthChange: null,
      bPaginate: null,
      bProcessing: null,
      bServerSide: null,
      bSort: null,
      bSortMulti: null,
      bSortClasses: null,
      bStateSave: null
    },
    oScroll: {
      bCollapse: null,
      iBarWidth: 0,
      sX: null,
      sXInner: null,
      sY: null
    },
    oLanguage: {
      fnInfoCallback: null
    },
    oBrowser: {
      bScrollOversize: !1,
      bScrollbarLeft: !1,
      bBounding: !1,
      barWidth: 0
    },
    ajax: null,
    aanFeatures: [],
    aoData: [],
    aiDisplay: [],
    aiDisplayMaster: [],
    aIds: {},
    aoColumns: [],
    aoHeader: [],
    aoFooter: [],
    oPreviousSearch: {},
    aoPreSearchCols: [],
    aaSorting: null,
    aaSortingFixed: [],
    asStripeClasses: null,
    asDestroyStripes: [],
    sDestroyWidth: 0,
    aoRowCallback: [],
    aoHeaderCallback: [],
    aoFooterCallback: [],
    aoDrawCallback: [],
    aoRowCreatedCallback: [],
    aoPreDrawCallback: [],
    aoInitComplete: [],
    aoStateSaveParams: [],
    aoStateLoadParams: [],
    aoStateLoaded: [],
    sTableId: "",
    nTable: null,
    nTHead: null,
    nTFoot: null,
    nTBody: null,
    nTableWrapper: null,
    bDeferLoading: !1,
    bInitialised: !1,
    aoOpenRows: [],
    sDom: null,
    searchDelay: null,
    sPaginationType: "two_button",
    iStateDuration: 0,
    aoStateSave: [],
    aoStateLoad: [],
    oSavedState: null,
    oLoadedState: null,
    sAjaxSource: null,
    sAjaxDataProp: null,
    bAjaxDataGet: !0,
    jqXHR: null,
    json: k,
    oAjaxData: k,
    fnServerData: null,
    aoServerParams: [],
    sServerMethod: null,
    fnFormatNumber: null,
    aLengthMenu: null,
    iDraw: 0,
    bDrawing: !1,
    iDrawError: -1,
    _iDisplayLength: 10,
    _iDisplayStart: 0,
    _iRecordsTotal: 0,
    _iRecordsDisplay: 0,
    bJUI: null,
    oClasses: {},
    bFiltered: !1,
    bSorted: !1,
    bSortCellsTop: null,
    oInit: null,
    aoDestroyCallback: [],
    fnRecordsTotal: function () {
      return "ssp" == y(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
    },
    fnRecordsDisplay: function () {
      return "ssp" == y(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
    },
    fnDisplayEnd: function () {
      var a = this._iDisplayLength,
        b = this._iDisplayStart,
        c = b + a,
        d = this.aiDisplay.length,
        e = this.oFeatures,
        f = e.bPaginate;
      return e.bServerSide ? !1 === f || -1 === a ? b + d : Math.min(b + a, this._iRecordsDisplay) : !f || c > d || -1 === a ? d : c
    },
    oInstance: null,
    sInstance: null,
    iTabIndex: 0,
    nScrollHead: null,
    nScrollFoot: null,
    aLastSort: [],
    oPlugins: {},
    rowIdFn: null,
    rowId: null
  };
  m.ext = x = {
    buttons: {},
    classes: {},
    builder: "-source-",
    errMode: "alert",
    feature: [],
    search: [],
    selector: {
      cell: [],
      column: [],
      row: []
    },
    internal: {},
    legacy: {
      ajax: null
    },
    pager: {},
    renderer: {
      pageButton: {},
      header: {}
    },
    order: {},
    type: {
      detect: [],
      search: {},
      order: {}
    },
    _unique: 0,
    fnVersionCheck: m.fnVersionCheck,
    iApiIndex: 0,
    oJUIClasses: {},
    sVersion: m.version
  };
  h.extend(x, {
    afnFiltering: x.search,
    aTypes: x.type.detect,
    ofnSearch: x.type.search,
    oSort: x.type.order,
    afnSortData: x.order,
    aoFeatures: x.feature,
    oApi: x.internal,
    oStdClasses: x.classes,
    oPagination: x.pager
  });
  h.extend(m.ext.classes, {
    sTable: "dataTable",
    sNoFooter: "no-footer",
    sPageButton: "paginate_button",
    sPageButtonActive: "current",
    sPageButtonDisabled: "disabled",
    sStripeOdd: "odd",
    sStripeEven: "even",
    sRowEmpty: "dataTables_empty",
    sWrapper: "dataTables_wrapper",
    sFilter: "dataTables_filter",
    sInfo: "dataTables_info",
    sPaging: "dataTables_paginate paging_",
    sLength: "dataTables_length",
    sProcessing: "dataTables_processing",
    sSortAsc: "sorting_asc",
    sSortDesc: "sorting_desc",
    sSortable: "sorting",
    sSortableAsc: "sorting_asc_disabled",
    sSortableDesc: "sorting_desc_disabled",
    sSortableNone: "sorting_disabled",
    sSortColumn: "sorting_",
    sFilterInput: "",
    sLengthSelect: "",
    sScrollWrapper: "dataTables_scroll",
    sScrollHead: "dataTables_scrollHead",
    sScrollHeadInner: "dataTables_scrollHeadInner",
    sScrollBody: "dataTables_scrollBody",
    sScrollFoot: "dataTables_scrollFoot",
    sScrollFootInner: "dataTables_scrollFootInner",
    sHeaderTH: "",
    sFooterTH: "",
    sSortJUIAsc: "",
    sSortJUIDesc: "",
    sSortJUI: "",
    sSortJUIAscAllowed: "",
    sSortJUIDescAllowed: "",
    sSortJUIWrapper: "",
    sSortIcon: "",
    sJUIHeader: "",
    sJUIFooter: ""
  });
  var Ea = "",
    Ea = "",
    G = Ea + "ui-state-default",
    ka = Ea + "css_right ui-icon ui-icon-",
    Yb = Ea + "fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";
  h.extend(m.ext.oJUIClasses, m.ext.classes, {
    sPageButton: "fg-button ui-button " + G,
    sPageButtonActive: "ui-state-disabled",
    sPageButtonDisabled: "ui-state-disabled",
    sPaging: "dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",
    sSortAsc: G + " sorting_asc",
    sSortDesc: G + " sorting_desc",
    sSortable: G + " sorting",
    sSortableAsc: G + " sorting_asc_disabled",
    sSortableDesc: G + " sorting_desc_disabled",
    sSortableNone: G + " sorting_disabled",
    sSortJUIAsc: ka + "triangle-1-n",
    sSortJUIDesc: ka + "triangle-1-s",
    sSortJUI: ka + "carat-2-n-s",
    sSortJUIAscAllowed: ka + "carat-1-n",
    sSortJUIDescAllowed: ka + "carat-1-s",
    sSortJUIWrapper: "DataTables_sort_wrapper",
    sSortIcon: "DataTables_sort_icon",
    sScrollHead: "dataTables_scrollHead " + G,
    sScrollFoot: "dataTables_scrollFoot " + G,
    sHeaderTH: G,
    sFooterTH: G,
    sJUIHeader: Yb +
      " ui-corner-tl ui-corner-tr",
    sJUIFooter: Yb + " ui-corner-bl ui-corner-br"
  });
  var Nb = m.ext.pager;
  h.extend(Nb, {
    simple: function () {
      return ["previous", "next"]
    },
    full: function () {
      return ["first", "previous", "next", "last"]
    },
    numbers: function (a, b) {
      return [ia(a, b)]
    },
    simple_numbers: function (a, b) {
      return ["previous", ia(a, b), "next"]
    },
    full_numbers: function (a, b) {
      return ["first", "previous", ia(a, b), "next", "last"]
    },
    first_last_numbers: function (a, b) {
      return ["first", ia(a, b), "last"]
    },
    _numbers: ia,
    numbers_length: 7
  });
  h.extend(!0, m.ext.renderer, {
    pageButton: {
      _: function (a, b, c, d, e, f) {
        var g = a.oClasses,
          j = a.oLanguage.oPaginate,
          i = a.oLanguage.oAria.paginate || {},
          m, l, p = 0,
          r = function (b, d) {
            var k, t, u, s, v = function (b) {
              Va(a, b.data.action, true)
            };
            k = 0;
            for (t = d.length; k < t; k++) {
              s = d[k];
              if (h.isArray(s)) {
                u = h("<" + (s.DT_el || "div") + "/>").appendTo(b);
                r(u, s)
              } else {
                m = null;
                l = "";
                switch (s) {
                  case "ellipsis":
                    b.append('<span class="ellipsis">&#x2026;</span>');
                    break;
                  case "first":
                    m = j.sFirst;
                    l = s + (e > 0 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  case "previous":
                    m = j.sPrevious;
                    l = s + (e > 0 ? "" : " " +
                      g.sPageButtonDisabled);
                    break;
                  case "next":
                    m = j.sNext;
                    l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  case "last":
                    m = j.sLast;
                    l = s + (e < f - 1 ? "" : " " + g.sPageButtonDisabled);
                    break;
                  default:
                    m = s + 1;
                    l = e === s ? g.sPageButtonActive : ""
                }
                if (m !== null) {
                  u = h("<a>", {
                    "class": g.sPageButton + " " + l,
                    "aria-controls": a.sTableId,
                    "aria-label": i[s],
                    "data-dt-idx": p,
                    tabindex: a.iTabIndex,
                    id: c === 0 && typeof s === "string" ? a.sTableId + "_" + s : null
                  }).html(m).appendTo(b);
                  Ya(u, {
                    action: s
                  }, v);
                  p++
                }
              }
            }
          },
          t;
        try {
          t = h(b).find(H.activeElement).data("dt-idx")
        } catch (u) {}
        r(h(b).empty(),
          d);
        t !== k && h(b).find("[data-dt-idx=" + t + "]").focus()
      }
    }
  });
  h.extend(m.ext.type.detect, [function (a, b) {
    var c = b.oLanguage.sDecimal;
    return ab(a, c) ? "num" + c : null
  }, function (a) {
    if (a && !(a instanceof Date) && !cc.test(a)) return null;
    var b = Date.parse(a);
    return null !== b && !isNaN(b) || M(a) ? "date" : null
  }, function (a, b) {
    var c = b.oLanguage.sDecimal;
    return ab(a, c, !0) ? "num-fmt" + c : null
  }, function (a, b) {
    var c = b.oLanguage.sDecimal;
    return Sb(a, c) ? "html-num" + c : null
  }, function (a, b) {
    var c = b.oLanguage.sDecimal;
    return Sb(a, c, !0) ? "html-num-fmt" +
      c : null
  }, function (a) {
    return M(a) || "string" === typeof a && -1 !== a.indexOf("<") ? "html" : null
  }]);
  h.extend(m.ext.type.search, {
    html: function (a) {
      return M(a) ? a : "string" === typeof a ? a.replace(Pb, " ").replace(Ca, "") : ""
    },
    string: function (a) {
      return M(a) ? a : "string" === typeof a ? a.replace(Pb, " ") : a
    }
  });
  var Ba = function (a, b, c, d) {
    if (0 !== a && (!a || "-" === a)) return -Infinity;
    b && (a = Rb(a, b));
    a.replace && (c && (a = a.replace(c, "")), d && (a = a.replace(d, "")));
    return 1 * a
  };
  h.extend(x.type.order, {
    "date-pre": function (a) {
      return Date.parse(a) || -Infinity
    },
    "html-pre": function (a) {
      return M(a) ? "" : a.replace ? a.replace(/<.*?>/g, "").toLowerCase() : a + ""
    },
    "string-pre": function (a) {
      return M(a) ? "" : "string" === typeof a ? a.toLowerCase() : !a.toString ? "" : a.toString()
    },
    "string-asc": function (a, b) {
      return a < b ? -1 : a > b ? 1 : 0
    },
    "string-desc": function (a, b) {
      return a < b ? 1 : a > b ? -1 : 0
    }
  });
  fb("");
  h.extend(!0, m.ext.renderer, {
    header: {
      _: function (a, b, c, d) {
        h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          if (a === f) {
            e = c.idx;
            b.removeClass(c.sSortingClass + " " + d.sSortAsc + " " + d.sSortDesc).addClass(h[e] ==
              "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass)
          }
        })
      },
      jqueryui: function (a, b, c, d) {
        h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon + " " + c.sSortingClassJUI)).appendTo(b);
        h(a.nTable).on("order.dt.DT", function (e, f, g, h) {
          if (a === f) {
            e = c.idx;
            b.removeClass(d.sSortAsc + " " + d.sSortDesc).addClass(h[e] == "asc" ? d.sSortAsc : h[e] == "desc" ? d.sSortDesc : c.sSortingClass);
            b.find("span." + d.sSortIcon).removeClass(d.sSortJUIAsc + " " + d.sSortJUIDesc + " " + d.sSortJUI + " " +
              d.sSortJUIAscAllowed + " " + d.sSortJUIDescAllowed).addClass(h[e] == "asc" ? d.sSortJUIAsc : h[e] == "desc" ? d.sSortJUIDesc : c.sSortingClassJUI)
          }
        })
      }
    }
  });
  var Zb = function (a) {
    return "string" === typeof a ? a.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : a
  };
  m.render = {
    number: function (a, b, c, d, e) {
      return {
        display: function (f) {
          if ("number" !== typeof f && "string" !== typeof f) return f;
          var g = 0 > f ? "-" : "",
            h = parseFloat(f);
          if (isNaN(h)) return Zb(f);
          h = h.toFixed(c);
          f = Math.abs(h);
          h = parseInt(f, 10);
          f = c ? b + (f - h).toFixed(c).substring(2) :
            "";
          return g + (d || "") + h.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + f + (e || "")
        }
      }
    },
    text: function () {
      return {
        display: Zb
      }
    }
  };
  h.extend(m.ext.internal, {
    _fnExternApiFunc: Ob,
    _fnBuildAjax: ua,
    _fnAjaxUpdate: nb,
    _fnAjaxParameters: wb,
    _fnAjaxUpdateDraw: xb,
    _fnAjaxDataSrc: va,
    _fnAddColumn: Ga,
    _fnColumnOptions: la,
    _fnAdjustColumnSizing: Z,
    _fnVisibleToColumnIndex: $,
    _fnColumnIndexToVisible: aa,
    _fnVisbleColumns: ba,
    _fnGetColumns: na,
    _fnColumnTypes: Ia,
    _fnApplyColumnDefs: kb,
    _fnHungarianMap: Y,
    _fnCamelToHungarian: J,
    _fnLanguageCompat: Fa,
    _fnBrowserDetect: ib,
    _fnAddData: N,
    _fnAddTr: oa,
    _fnNodeToDataIndex: function (a, b) {
      return b._DT_RowIndex !== k ? b._DT_RowIndex : null
    },
    _fnNodeToColumnIndex: function (a, b, c) {
      return h.inArray(c, a.aoData[b].anCells)
    },
    _fnGetCellData: B,
    _fnSetCellData: lb,
    _fnSplitObjNotation: La,
    _fnGetObjectDataFn: R,
    _fnSetObjectDataFn: S,
    _fnGetDataMaster: Ma,
    _fnClearTable: pa,
    _fnDeleteIndex: qa,
    _fnInvalidate: da,
    _fnGetRowElements: Ka,
    _fnCreateTr: Ja,
    _fnBuildHead: mb,
    _fnDrawHead: fa,
    _fnDraw: O,
    _fnReDraw: T,
    _fnAddOptionsHtml: pb,
    _fnDetectHeader: ea,
    _fnGetUniqueThs: ta,
    _fnFeatureHtmlFilter: rb,
    _fnFilterComplete: ga,
    _fnFilterCustom: Ab,
    _fnFilterColumn: zb,
    _fnFilter: yb,
    _fnFilterCreateSearch: Ra,
    _fnEscapeRegex: Sa,
    _fnFilterData: Bb,
    _fnFeatureHtmlInfo: ub,
    _fnUpdateInfo: Eb,
    _fnInfoMacros: Fb,
    _fnInitialise: ha,
    _fnInitComplete: wa,
    _fnLengthChange: Ta,
    _fnFeatureHtmlLength: qb,
    _fnFeatureHtmlPaginate: vb,
    _fnPageChange: Va,
    _fnFeatureHtmlProcessing: sb,
    _fnProcessingDisplay: C,
    _fnFeatureHtmlTable: tb,
    _fnScrollDraw: ma,
    _fnApplyToChildren: I,
    _fnCalculateColumnWidths: Ha,
    _fnThrottle: Qa,
    _fnConvertToWidth: Gb,
    _fnGetWidestNode: Hb,
    _fnGetMaxLenString: Ib,
    _fnStringToCss: v,
    _fnSortFlatten: W,
    _fnSort: ob,
    _fnSortAria: Kb,
    _fnSortListener: Xa,
    _fnSortAttachListener: Oa,
    _fnSortingClasses: ya,
    _fnSortData: Jb,
    _fnSaveState: za,
    _fnLoadState: Lb,
    _fnSettingsFromNode: Aa,
    _fnLog: K,
    _fnMap: F,
    _fnBindAction: Ya,
    _fnCallbackReg: z,
    _fnCallbackFire: s,
    _fnLengthOverflow: Ua,
    _fnRenderer: Pa,
    _fnDataSource: y,
    _fnRowAttributes: Na,
    _fnCalculateEnd: function () {}
  });
  h.fn.dataTable = m;
  m.$ = h;
  h.fn.dataTableSettings = m.settings;
  h.fn.dataTableExt =
    m.ext;
  h.fn.DataTable = function (a) {
    return h(this).dataTable(a).api()
  };
  h.each(m, function (a, b) {
    h.fn.DataTable[a] = b
  });
  return h.fn.dataTable
});


hs.captionId = 'the-caption';
hs.outlineType = 'rounded-white';
window.onload = function () {
  hs.preloadImages(5);
}

$(function () {

  (function () {
    var slider = $('.slider').bxSlider({
      mode: 'fade',
      speed: 1000,
      auto: true,
      pause: 6000,
      controls: false,
      pager: true,
      useCSS: false,
      onSlideAfter: function () {
        if (this.auto) {
          slider.startAuto();
        }
      }
    });
  })();

});


jQuery(document).ready(function ($) {
  if ($('.tablepress').length > 0) {
    var table = $(this).html();
    $('.hiddened table').html('table')
    console.log('zipfile!')
  }
});
