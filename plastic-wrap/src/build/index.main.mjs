// Automatically generated with Reach 0.1.10 (84dc282c)
/* eslint-disable */
export const _version = '0.1.10';
export const _versionHash = '0.1.10 (84dc282c)';
export const _backendVersion = 15;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc1, ctc5],
      2: [ctc0, ctc1, ctc2, ctc1, ctc5, ctc0, ctc2, ctc2, ctc2],
      4: [ctc0, ctc1, ctc1, ctc0, ctc5, ctc2],
      21: [ctc0, ctc1, ctc2, ctc1, ctc0, ctc2, ctc2, ctc5, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function NFTOwner(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for NFTOwner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for NFTOwner expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc5 = stdlib.T_Object({
    metadata: ctc1,
    name: ctc1,
    supply: ctc2,
    symbol: ctc3,
    url: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc2, ctc0]);
  const ctc8 = stdlib.T_Tuple([ctc2, ctc7, ctc7]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Data({
    plasticWrapAPI_unwrapNFT0_88: ctc9,
    plasticWrapAPI_wrapNFT0_88: ctc9
    });
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Tuple([ctc2, ctc2, ctc6]);
  const ctc13 = stdlib.T_Array(ctc12, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v683 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v684 = [v683, v683];
  const v692 = stdlib.protect(ctc0, await interact.getOriginalNFT(), {
    at: './index.rsh:33:59:application',
    fs: ['at ./index.rsh:32:16:application call to [unknown function] (defined at: ./index.rsh:32:20:function exp)'],
    msg: 'getOriginalNFT',
    who: 'NFTOwner'
    });
  const v693 = stdlib.protect(ctc5, await interact.getWrapParams(), {
    at: './index.rsh:34:86:application',
    fs: ['at ./index.rsh:32:16:application call to [unknown function] (defined at: ./index.rsh:32:20:function exp)'],
    msg: 'getWrapParams',
    who: 'NFTOwner'
    });
  const v694 = v693.metadata;
  const v695 = v693.name;
  const v696 = v693.supply;
  const v697 = v693.symbol;
  const v698 = v693.url;
  const v704 = stdlib.protect(ctc6, await interact.NFTOptIn(), {
    at: './index.rsh:35:49:application',
    fs: ['at ./index.rsh:32:16:application call to [unknown function] (defined at: ./index.rsh:32:20:function exp)'],
    msg: 'NFTOptIn',
    who: 'NFTOwner'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v692, v704, v695, v697, v698, v694, v696],
    evt_cnt: 7,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:12:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc6, ctc1, ctc3, ctc4, ctc1, ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:37:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v706, v707, v708, v709, v710, v711, v712], secs: v714, time: v713, didSend: v47, from: v705 } = txn1;
      
      const v715 = v684[stdlib.checkedBigNumberify('./index.rsh:37:12:dot', stdlib.UInt_max, '0')];
      const v717 = v715[stdlib.checkedBigNumberify('./index.rsh:37:12:dot', stdlib.UInt_max, '1')];
      const v718 = v715[stdlib.checkedBigNumberify('./index.rsh:37:12:dot', stdlib.UInt_max, '2')];
      const v719 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v717, v718];
      const v720 = stdlib.Array_set(v684, stdlib.checkedBigNumberify('./index.rsh:37:12:dot', stdlib.UInt_max, '0'), v719);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v706
        });
      ;
      const v722 = stdlib.simTokenNew(sim_r, v708, v709, v710, v711, v712, undefined /* Nothing */, getSimTokCtr());
      const v723 = await txn1.getOutput('internal', 'v722', ctc0, v722);
      const v733 = v720[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1')];
      const v735 = v733[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1')];
      const v736 = v733[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '2')];
      const v737 = [v712, v735, v736];
      const v738 = stdlib.Array_set(v720, stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1'), v737);
      const v740 = v738[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1')];
      const v741 = v740[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '0')];
      const v743 = v740[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '2')];
      const v744 = [v741, v712, v743];
      const v745 = stdlib.Array_set(v738, stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1'), v744);
      const v746 = v745[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1')];
      const v747 = v746[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '0')];
      const v748 = v746[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1')];
      const v750 = [v747, v748, false];
      const v751 = stdlib.Array_set(v745, stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1'), v750);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc6, ctc1, ctc3, ctc4, ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v706, v707, v708, v709, v710, v711, v712], secs: v714, time: v713, didSend: v47, from: v705 } = txn1;
  const v715 = v684[stdlib.checkedBigNumberify('./index.rsh:37:12:dot', stdlib.UInt_max, '0')];
  const v717 = v715[stdlib.checkedBigNumberify('./index.rsh:37:12:dot', stdlib.UInt_max, '1')];
  const v718 = v715[stdlib.checkedBigNumberify('./index.rsh:37:12:dot', stdlib.UInt_max, '2')];
  const v719 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v717, v718];
  const v720 = stdlib.Array_set(v684, stdlib.checkedBigNumberify('./index.rsh:37:12:dot', stdlib.UInt_max, '0'), v719);
  ;
  ;
  const v722 = undefined /* TokenNew */;
  const v723 = await txn1.getOutput('internal', 'v722', ctc0, v722);
  const v724 = [v706];
  const v1548 = v724[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
  const v1552 = stdlib.tokenEq(v723, v1548);
  const v732 = v1552 ? false : true;
  stdlib.assert(v732, {
    at: './index.rsh:39:31:application',
    fs: [],
    msg: 'New token is unique',
    who: 'NFTOwner'
    });
  const v733 = v720[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1')];
  const v735 = v733[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1')];
  const v736 = v733[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '2')];
  const v737 = [v712, v735, v736];
  const v738 = stdlib.Array_set(v720, stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1'), v737);
  const v740 = v738[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1')];
  const v741 = v740[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '0')];
  const v743 = v740[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '2')];
  const v744 = [v741, v712, v743];
  const v745 = stdlib.Array_set(v738, stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1'), v744);
  const v746 = v745[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1')];
  const v747 = v746[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '0')];
  const v748 = v746[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1')];
  const v750 = [v747, v748, false];
  const v751 = stdlib.Array_set(v745, stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1'), v750);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc2, ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v755, v756], secs: v758, time: v757, didSend: v70, from: v754 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v705, v706, v712, v723, v751, v754, v755, v756, v757],
    evt_cnt: 0,
    funcNum: 2,
    lct: v757,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v761, time: v760, didSend: v75, from: v759 } = txn3;
      
      ;
      const v764 = stdlib.add(v757, v756);
      const v766 = v760;
      const v772 = v751;
      const v773 = stdlib.checkedBigNumberify('./index.rsh:31:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc11, ctc0, ctc2, ctc0, ctc13, ctc11, ctc2, ctc2, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v761, time: v760, didSend: v75, from: v759 } = txn3;
  ;
  const v762 = stdlib.addressEq(v705, v759);
  stdlib.assert(v762, {
    at: './index.rsh:48:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'NFTOwner'
    });
  const v764 = stdlib.add(v757, v756);
  let v766 = v760;
  let v772 = v751;
  let v773 = stdlib.checkedBigNumberify('./index.rsh:31:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc10],
      timeoutAt: ['time', v764],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v705, v706, v712, v723, v754, v755, v764, v772, v773],
        evt_cnt: 0,
        funcNum: 6,
        lct: v766,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:52:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v1215, time: v1214, didSend: v444, from: v1213 } = txn5;
          
          ;
          const cv766 = v1214;
          const cv772 = v772;
          const cv773 = v773;
          
          await (async () => {
            const v766 = cv766;
            const v772 = cv772;
            const v773 = cv773;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc11, ctc0, ctc2, ctc0, ctc11, ctc2, ctc2, ctc13, ctc2],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1215, time: v1214, didSend: v444, from: v1213 } = txn5;
      ;
      const v1216 = stdlib.addressEq(v705, v1213);
      const v1217 = stdlib.addressEq(v754, v1213);
      const v1218 = v1216 ? true : v1217;
      stdlib.assert(v1218, {
        at: './index.rsh:52:19:dot',
        fs: ['at ./index.rsh:96:23:application call to [unknown function] (defined at: ./index.rsh:96:23:function exp)'],
        msg: 'sender correct',
        who: 'NFTOwner'
        });
      const cv766 = v1214;
      const cv772 = v772;
      const cv773 = v773;
      
      v766 = cv766;
      v772 = cv772;
      v773 = cv773;
      
      continue;
      }
    else {
      const {data: [v908], secs: v910, time: v909, didSend: v354, from: v907 } = txn4;
      switch (v908[0]) {
        case 'plasticWrapAPI_unwrapNFT0_88': {
          const v911 = v908[1];
          undefined /* setApiDetails */;
          ;
          const v960 = v772[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v961 = v960[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v965 = v960[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v966 = v960[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
          const v967 = [v961, v965, v966];
          const v968 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0'), v967);
          ;
          const v969 = v968[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v970 = v969[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v971 = stdlib.add(v970, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v974 = v969[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v975 = v969[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
          const v976 = [v971, v974, v975];
          const v977 = stdlib.Array_set(v968, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1'), v976);
          ;
          const v979 = v911[stdlib.checkedBigNumberify('./index.rsh:75:14:spread', stdlib.UInt_max, '0')];
          const v980 = v979[stdlib.checkedBigNumberify('./index.rsh:84:12:array', stdlib.UInt_max, '0')];
          const v981 = v979[stdlib.checkedBigNumberify('./index.rsh:84:12:array', stdlib.UInt_max, '1')];
          const v982 = v979[stdlib.checkedBigNumberify('./index.rsh:84:12:array', stdlib.UInt_max, '2')];
          const v983 = v981[stdlib.checkedBigNumberify('./index.rsh:84:18:array', stdlib.UInt_max, '0')];
          const v985 = v982[stdlib.checkedBigNumberify('./index.rsh:84:32:array', stdlib.UInt_max, '0')];
          const v987 = stdlib.eq(v980, stdlib.checkedBigNumberify('./index.rsh:85:28:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v987, {
            at: './index.rsh:85:20:application',
            fs: ['at ./index.rsh:84:58:application call to [unknown function] (defined at: ./index.rsh:84:58:function exp)'],
            msg: null,
            who: 'NFTOwner'
            });
          const v988 = stdlib.eq(v983, stdlib.checkedBigNumberify('./index.rsh:86:29:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v988, {
            at: './index.rsh:86:20:application',
            fs: ['at ./index.rsh:84:58:application call to [unknown function] (defined at: ./index.rsh:84:58:function exp)'],
            msg: null,
            who: 'NFTOwner'
            });
          const v989 = stdlib.eq(v985, stdlib.checkedBigNumberify('./index.rsh:87:29:decimal', stdlib.UInt_max, '1'));
          stdlib.assert(v989, {
            at: './index.rsh:87:20:application',
            fs: ['at ./index.rsh:84:58:application call to [unknown function] (defined at: ./index.rsh:84:58:function exp)'],
            msg: null,
            who: 'NFTOwner'
            });
          const v990 = v977[stdlib.checkedBigNumberify('./index.rsh:88:28:application', stdlib.UInt_max, '0')];
          const v991 = v990[stdlib.checkedBigNumberify('./index.rsh:88:28:application', stdlib.UInt_max, '0')];
          const v992 = stdlib.eq(v991, stdlib.checkedBigNumberify('./index.rsh:88:45:decimal', stdlib.UInt_max, '1'));
          stdlib.assert(v992, {
            at: './index.rsh:88:20:application',
            fs: ['at ./index.rsh:84:58:application call to [unknown function] (defined at: ./index.rsh:84:58:function exp)'],
            msg: null,
            who: 'NFTOwner'
            });
          const v998 = stdlib.sub(v991, stdlib.checkedBigNumberify('./index.rsh:90:24:decimal', stdlib.UInt_max, '1'));
          const v1001 = v990[stdlib.checkedBigNumberify('./index.rsh:90:44:application', stdlib.UInt_max, '1')];
          const v1002 = v990[stdlib.checkedBigNumberify('./index.rsh:90:44:application', stdlib.UInt_max, '2')];
          const v1003 = [v998, v1001, v1002];
          const v1004 = stdlib.Array_set(v977, stdlib.checkedBigNumberify('./index.rsh:90:44:application', stdlib.UInt_max, '0'), v1003);
          ;
          const v1005 = true;
          await txn4.getOutput('plasticWrapAPI_unwrapNFT', 'v1005', ctc6, v1005);
          const cv766 = v909;
          const cv772 = v1004;
          const cv773 = v773;
          
          v766 = cv766;
          v772 = cv772;
          v773 = cv773;
          
          continue;
          break;
          }
        case 'plasticWrapAPI_wrapNFT0_88': {
          const v1062 = v908[1];
          undefined /* setApiDetails */;
          const v1110 = stdlib.add(v773, v755);
          ;
          const v1111 = v772[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v1112 = v1111[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v1113 = stdlib.add(v1112, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1116 = v1111[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v1117 = v1111[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
          const v1118 = [v1113, v1116, v1117];
          const v1119 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0'), v1118);
          ;
          const v1120 = v1119[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v1121 = v1120[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v1125 = v1120[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v1126 = v1120[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
          const v1127 = [v1121, v1125, v1126];
          const v1128 = stdlib.Array_set(v1119, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1'), v1127);
          ;
          const v1171 = v1062[stdlib.checkedBigNumberify('./index.rsh:58:11:spread', stdlib.UInt_max, '0')];
          const v1172 = v1171[stdlib.checkedBigNumberify('./index.rsh:65:10:array', stdlib.UInt_max, '0')];
          const v1179 = stdlib.add(v755, stdlib.checkedBigNumberify('./index.rsh:66:31:decimal', stdlib.UInt_max, '1'));
          const v1180 = stdlib.eq(v1172, v1179);
          stdlib.assert(v1180, {
            at: './index.rsh:66:18:application',
            fs: ['at ./index.rsh:65:56:application call to [unknown function] (defined at: ./index.rsh:65:56:function exp)'],
            msg: null,
            who: 'NFTOwner'
            });
          const v1181 = v1128[stdlib.checkedBigNumberify('./index.rsh:67:26:application', stdlib.UInt_max, '1')];
          const v1182 = v1181[stdlib.checkedBigNumberify('./index.rsh:67:26:application', stdlib.UInt_max, '0')];
          const v1183 = stdlib.eq(v1182, v712);
          stdlib.assert(v1183, {
            at: './index.rsh:67:18:application',
            fs: ['at ./index.rsh:65:56:application call to [unknown function] (defined at: ./index.rsh:65:56:function exp)'],
            msg: null,
            who: 'NFTOwner'
            });
          const v1189 = stdlib.sub(v1182, v712);
          const v1192 = v1181[stdlib.checkedBigNumberify('./index.rsh:69:46:application', stdlib.UInt_max, '1')];
          const v1193 = v1181[stdlib.checkedBigNumberify('./index.rsh:69:46:application', stdlib.UInt_max, '2')];
          const v1194 = [v1189, v1192, v1193];
          const v1195 = stdlib.Array_set(v1128, stdlib.checkedBigNumberify('./index.rsh:69:46:application', stdlib.UInt_max, '1'), v1194);
          ;
          const v1199 = stdlib.sub(v1110, v755);
          ;
          await txn4.getOutput('plasticWrapAPI_wrapNFT', 'v723', ctc0, v723);
          const cv766 = v909;
          const cv772 = v1195;
          const cv773 = v1199;
          
          v766 = cv766;
          v772 = cv772;
          v773 = cv773;
          
          continue;
          break;
          }
        }}
    
    }
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 4,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1222, time: v1221, didSend: v449, from: v1220 } = txn4;
  ;
  const v1223 = stdlib.addressEq(v754, v1220);
  stdlib.assert(v1223, {
    at: './index.rsh:99:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'NFTOwner'
    });
  const v1224 = v772[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '1')];
  const v1225 = v1224[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
  const v1226 = stdlib.gt(v1225, stdlib.checkedBigNumberify('./index.rsh:100:34:decimal', stdlib.UInt_max, '0'));
  if (v1226) {
    const v1234 = stdlib.sub(v1225, v1225);
    const v1237 = v1224[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '1')];
    const v1238 = v1224[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '2')];
    const v1239 = [v1234, v1237, v1238];
    const v1240 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '1'), v1239);
    const v1241 = v1240[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '1')];
    const v1242 = v1241[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '1')];
    const v1243 = stdlib.sub(v1242, v1225);
    const v1245 = v1241[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '0')];
    const v1247 = v1241[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '2')];
    const v1248 = [v1245, v1243, v1247];
    const v1249 = stdlib.Array_set(v1240, stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '1'), v1248);
    undefined /* TokenBurn */;
    const v1250 = v1249[stdlib.checkedBigNumberify('./index.rsh:103:33:application', stdlib.UInt_max, '1')];
    const v1251 = v1250[stdlib.checkedBigNumberify('./index.rsh:103:33:application', stdlib.UInt_max, '2')];
    if (v1251) {
      const v1332 = v1249[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1333 = v1332[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1334 = stdlib.gt(v1333, stdlib.checkedBigNumberify('./index.rsh:107:35:decimal', stdlib.UInt_max, '0'));
      if (v1334) {
        const v1340 = stdlib.sub(v773, v1333);
        ;
        const v1342 = stdlib.gt(v1340, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1342) {
          ;
          return;
          }
        else {
          return;
          }}
      else {
        const v1371 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1371) {
          ;
          return;
          }
        else {
          return;
          }}}
    else {
      const v1257 = v1250[stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v1260 = v1250[stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '0')];
      const v1263 = [v1260, v1257, true];
      const v1264 = stdlib.Array_set(v1249, stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '1'), v1263);
      const v1265 = v1264[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1266 = v1265[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1267 = stdlib.gt(v1266, stdlib.checkedBigNumberify('./index.rsh:107:35:decimal', stdlib.UInt_max, '0'));
      if (v1267) {
        const v1273 = stdlib.sub(v773, v1266);
        ;
        const v1275 = stdlib.gt(v1273, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1275) {
          ;
          return;
          }
        else {
          return;
          }}
      else {
        const v1304 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1304) {
          ;
          return;
          }
        else {
          return;
          }}}}
  else {
    const v1400 = v1224[stdlib.checkedBigNumberify('./index.rsh:103:33:application', stdlib.UInt_max, '2')];
    if (v1400) {
      const v1481 = v772[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1482 = v1481[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1483 = stdlib.gt(v1482, stdlib.checkedBigNumberify('./index.rsh:107:35:decimal', stdlib.UInt_max, '0'));
      if (v1483) {
        const v1489 = stdlib.sub(v773, v1482);
        ;
        const v1491 = stdlib.gt(v1489, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1491) {
          ;
          return;
          }
        else {
          return;
          }}
      else {
        const v1520 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1520) {
          ;
          return;
          }
        else {
          return;
          }}}
    else {
      const v1406 = v1224[stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v1412 = [v1225, v1406, true];
      const v1413 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '1'), v1412);
      const v1414 = v1413[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1415 = v1414[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1416 = stdlib.gt(v1415, stdlib.checkedBigNumberify('./index.rsh:107:35:decimal', stdlib.UInt_max, '0'));
      if (v1416) {
        const v1422 = stdlib.sub(v773, v1415);
        ;
        const v1424 = stdlib.gt(v1422, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1424) {
          ;
          return;
          }
        else {
          return;
          }}
      else {
        const v1453 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1453) {
          ;
          return;
          }
        else {
          return;
          }}}}
  
  
  
  
  
  
  
  };
export async function Platform(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Platform expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Platform expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'));
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '96'));
  const ctc6 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc0, ctc6, ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Data({
    plasticWrapAPI_unwrapNFT0_88: ctc8,
    plasticWrapAPI_wrapNFT0_88: ctc8
    });
  const ctc10 = stdlib.T_Address;
  const ctc11 = stdlib.T_Tuple([ctc0, ctc0, ctc2]);
  const ctc12 = stdlib.T_Array(ctc11, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  
  
  const v683 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v684 = [v683, v683];
  const v688 = stdlib.protect(ctc0, interact.cost, 'for Platform\'s interact field cost');
  const v689 = stdlib.protect(ctc0, interact.duration, 'for Platform\'s interact field duration');
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 7,
    funcNum: 0,
    out_tys: [ctc1, ctc2, ctc3, ctc4, ctc5, ctc3, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v706, v707, v708, v709, v710, v711, v712], secs: v714, time: v713, didSend: v47, from: v705 } = txn1;
  const v715 = v684[stdlib.checkedBigNumberify('./index.rsh:37:12:dot', stdlib.UInt_max, '0')];
  const v717 = v715[stdlib.checkedBigNumberify('./index.rsh:37:12:dot', stdlib.UInt_max, '1')];
  const v718 = v715[stdlib.checkedBigNumberify('./index.rsh:37:12:dot', stdlib.UInt_max, '2')];
  const v719 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v717, v718];
  const v720 = stdlib.Array_set(v684, stdlib.checkedBigNumberify('./index.rsh:37:12:dot', stdlib.UInt_max, '0'), v719);
  ;
  ;
  const v722 = undefined /* TokenNew */;
  const v723 = await txn1.getOutput('internal', 'v722', ctc1, v722);
  const v724 = [v706];
  const v1548 = v724[stdlib.checkedBigNumberify('reach standard library:143:21:application', stdlib.UInt_max, '0')];
  const v1552 = stdlib.tokenEq(v723, v1548);
  const v732 = v1552 ? false : true;
  stdlib.assert(v732, {
    at: './index.rsh:39:31:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Platform'
    });
  const v733 = v720[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1')];
  const v735 = v733[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1')];
  const v736 = v733[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '2')];
  const v737 = [v712, v735, v736];
  const v738 = stdlib.Array_set(v720, stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1'), v737);
  const v740 = v738[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1')];
  const v741 = v740[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '0')];
  const v743 = v740[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '2')];
  const v744 = [v741, v712, v743];
  const v745 = stdlib.Array_set(v738, stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1'), v744);
  const v746 = v745[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1')];
  const v747 = v746[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '0')];
  const v748 = v746[stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1')];
  const v750 = [v747, v748, false];
  const v751 = stdlib.Array_set(v745, stdlib.checkedBigNumberify('./index.rsh:39:31:application', stdlib.UInt_max, '1'), v750);
  const txn2 = await (ctc.sendrecv({
    args: [v705, v706, v712, v723, v751, v688, v689],
    evt_cnt: 2,
    funcNum: 1,
    lct: v713,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:45:12:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v755, v756], secs: v758, time: v757, didSend: v70, from: v754 } = txn2;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc1, ctc0, ctc1, ctc12, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v755, v756], secs: v758, time: v757, didSend: v70, from: v754 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v761, time: v760, didSend: v75, from: v759 } = txn3;
  ;
  const v762 = stdlib.addressEq(v705, v759);
  stdlib.assert(v762, {
    at: './index.rsh:48:12:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Platform'
    });
  const v764 = stdlib.add(v757, v756);
  let v766 = v760;
  let v772 = v751;
  let v773 = stdlib.checkedBigNumberify('./index.rsh:31:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return true;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc9],
      timeoutAt: ['time', v764],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v705, v706, v712, v723, v754, v755, v764, v772, v773],
        evt_cnt: 0,
        funcNum: 6,
        lct: v766,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./index.rsh:52:19:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v1215, time: v1214, didSend: v444, from: v1213 } = txn5;
          
          ;
          const cv766 = v1214;
          const cv772 = v772;
          const cv773 = v773;
          
          await (async () => {
            const v766 = cv766;
            const v772 = cv772;
            const v773 = cv773;
            
            if (await (async () => {
              
              return true;})()) {
              sim_r.isHalt = false;
              }
            else {
              sim_r.isHalt = false;
              }})();
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc10, ctc1, ctc0, ctc1, ctc10, ctc0, ctc0, ctc12, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1215, time: v1214, didSend: v444, from: v1213 } = txn5;
      ;
      const v1216 = stdlib.addressEq(v705, v1213);
      const v1217 = stdlib.addressEq(v754, v1213);
      const v1218 = v1216 ? true : v1217;
      stdlib.assert(v1218, {
        at: './index.rsh:52:19:dot',
        fs: ['at ./index.rsh:96:23:application call to [unknown function] (defined at: ./index.rsh:96:23:function exp)'],
        msg: 'sender correct',
        who: 'Platform'
        });
      const cv766 = v1214;
      const cv772 = v772;
      const cv773 = v773;
      
      v766 = cv766;
      v772 = cv772;
      v773 = cv773;
      
      continue;
      }
    else {
      const {data: [v908], secs: v910, time: v909, didSend: v354, from: v907 } = txn4;
      switch (v908[0]) {
        case 'plasticWrapAPI_unwrapNFT0_88': {
          const v911 = v908[1];
          undefined /* setApiDetails */;
          ;
          const v960 = v772[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v961 = v960[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v965 = v960[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v966 = v960[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
          const v967 = [v961, v965, v966];
          const v968 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0'), v967);
          ;
          const v969 = v968[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v970 = v969[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v971 = stdlib.add(v970, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v974 = v969[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v975 = v969[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
          const v976 = [v971, v974, v975];
          const v977 = stdlib.Array_set(v968, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1'), v976);
          ;
          const v979 = v911[stdlib.checkedBigNumberify('./index.rsh:75:14:spread', stdlib.UInt_max, '0')];
          const v980 = v979[stdlib.checkedBigNumberify('./index.rsh:84:12:array', stdlib.UInt_max, '0')];
          const v981 = v979[stdlib.checkedBigNumberify('./index.rsh:84:12:array', stdlib.UInt_max, '1')];
          const v982 = v979[stdlib.checkedBigNumberify('./index.rsh:84:12:array', stdlib.UInt_max, '2')];
          const v983 = v981[stdlib.checkedBigNumberify('./index.rsh:84:18:array', stdlib.UInt_max, '0')];
          const v985 = v982[stdlib.checkedBigNumberify('./index.rsh:84:32:array', stdlib.UInt_max, '0')];
          const v987 = stdlib.eq(v980, stdlib.checkedBigNumberify('./index.rsh:85:28:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v987, {
            at: './index.rsh:85:20:application',
            fs: ['at ./index.rsh:84:58:application call to [unknown function] (defined at: ./index.rsh:84:58:function exp)'],
            msg: null,
            who: 'Platform'
            });
          const v988 = stdlib.eq(v983, stdlib.checkedBigNumberify('./index.rsh:86:29:decimal', stdlib.UInt_max, '0'));
          stdlib.assert(v988, {
            at: './index.rsh:86:20:application',
            fs: ['at ./index.rsh:84:58:application call to [unknown function] (defined at: ./index.rsh:84:58:function exp)'],
            msg: null,
            who: 'Platform'
            });
          const v989 = stdlib.eq(v985, stdlib.checkedBigNumberify('./index.rsh:87:29:decimal', stdlib.UInt_max, '1'));
          stdlib.assert(v989, {
            at: './index.rsh:87:20:application',
            fs: ['at ./index.rsh:84:58:application call to [unknown function] (defined at: ./index.rsh:84:58:function exp)'],
            msg: null,
            who: 'Platform'
            });
          const v990 = v977[stdlib.checkedBigNumberify('./index.rsh:88:28:application', stdlib.UInt_max, '0')];
          const v991 = v990[stdlib.checkedBigNumberify('./index.rsh:88:28:application', stdlib.UInt_max, '0')];
          const v992 = stdlib.eq(v991, stdlib.checkedBigNumberify('./index.rsh:88:45:decimal', stdlib.UInt_max, '1'));
          stdlib.assert(v992, {
            at: './index.rsh:88:20:application',
            fs: ['at ./index.rsh:84:58:application call to [unknown function] (defined at: ./index.rsh:84:58:function exp)'],
            msg: null,
            who: 'Platform'
            });
          const v998 = stdlib.sub(v991, stdlib.checkedBigNumberify('./index.rsh:90:24:decimal', stdlib.UInt_max, '1'));
          const v1001 = v990[stdlib.checkedBigNumberify('./index.rsh:90:44:application', stdlib.UInt_max, '1')];
          const v1002 = v990[stdlib.checkedBigNumberify('./index.rsh:90:44:application', stdlib.UInt_max, '2')];
          const v1003 = [v998, v1001, v1002];
          const v1004 = stdlib.Array_set(v977, stdlib.checkedBigNumberify('./index.rsh:90:44:application', stdlib.UInt_max, '0'), v1003);
          ;
          const v1005 = true;
          await txn4.getOutput('plasticWrapAPI_unwrapNFT', 'v1005', ctc2, v1005);
          const cv766 = v909;
          const cv772 = v1004;
          const cv773 = v773;
          
          v766 = cv766;
          v772 = cv772;
          v773 = cv773;
          
          continue;
          break;
          }
        case 'plasticWrapAPI_wrapNFT0_88': {
          const v1062 = v908[1];
          undefined /* setApiDetails */;
          const v1110 = stdlib.add(v773, v755);
          ;
          const v1111 = v772[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v1112 = v1111[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v1113 = stdlib.add(v1112, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1116 = v1111[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v1117 = v1111[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
          const v1118 = [v1113, v1116, v1117];
          const v1119 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0'), v1118);
          ;
          const v1120 = v1119[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v1121 = v1120[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v1125 = v1120[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v1126 = v1120[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
          const v1127 = [v1121, v1125, v1126];
          const v1128 = stdlib.Array_set(v1119, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1'), v1127);
          ;
          const v1171 = v1062[stdlib.checkedBigNumberify('./index.rsh:58:11:spread', stdlib.UInt_max, '0')];
          const v1172 = v1171[stdlib.checkedBigNumberify('./index.rsh:65:10:array', stdlib.UInt_max, '0')];
          const v1179 = stdlib.add(v755, stdlib.checkedBigNumberify('./index.rsh:66:31:decimal', stdlib.UInt_max, '1'));
          const v1180 = stdlib.eq(v1172, v1179);
          stdlib.assert(v1180, {
            at: './index.rsh:66:18:application',
            fs: ['at ./index.rsh:65:56:application call to [unknown function] (defined at: ./index.rsh:65:56:function exp)'],
            msg: null,
            who: 'Platform'
            });
          const v1181 = v1128[stdlib.checkedBigNumberify('./index.rsh:67:26:application', stdlib.UInt_max, '1')];
          const v1182 = v1181[stdlib.checkedBigNumberify('./index.rsh:67:26:application', stdlib.UInt_max, '0')];
          const v1183 = stdlib.eq(v1182, v712);
          stdlib.assert(v1183, {
            at: './index.rsh:67:18:application',
            fs: ['at ./index.rsh:65:56:application call to [unknown function] (defined at: ./index.rsh:65:56:function exp)'],
            msg: null,
            who: 'Platform'
            });
          const v1189 = stdlib.sub(v1182, v712);
          const v1192 = v1181[stdlib.checkedBigNumberify('./index.rsh:69:46:application', stdlib.UInt_max, '1')];
          const v1193 = v1181[stdlib.checkedBigNumberify('./index.rsh:69:46:application', stdlib.UInt_max, '2')];
          const v1194 = [v1189, v1192, v1193];
          const v1195 = stdlib.Array_set(v1128, stdlib.checkedBigNumberify('./index.rsh:69:46:application', stdlib.UInt_max, '1'), v1194);
          ;
          const v1199 = stdlib.sub(v1110, v755);
          ;
          await txn4.getOutput('plasticWrapAPI_wrapNFT', 'v723', ctc1, v723);
          const cv766 = v909;
          const cv772 = v1195;
          const cv773 = v1199;
          
          v766 = cv766;
          v772 = cv772;
          v773 = cv773;
          
          continue;
          break;
          }
        }}
    
    }
  const txn4 = await (ctc.sendrecv({
    args: [v705, v706, v723, v754, v772, v773],
    evt_cnt: 0,
    funcNum: 4,
    lct: v766,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:99:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v1222, time: v1221, didSend: v449, from: v1220 } = txn4;
      
      ;
      const v1224 = v772[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '1')];
      const v1225 = v1224[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
      const v1226 = stdlib.gt(v1225, stdlib.checkedBigNumberify('./index.rsh:100:34:decimal', stdlib.UInt_max, '0'));
      if (v1226) {
        const v1234 = stdlib.sub(v1225, v1225);
        const v1237 = v1224[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '1')];
        const v1238 = v1224[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '2')];
        const v1239 = [v1234, v1237, v1238];
        const v1240 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '1'), v1239);
        const v1241 = v1240[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '1')];
        const v1242 = v1241[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '1')];
        const v1243 = stdlib.sub(v1242, v1225);
        const v1245 = v1241[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '0')];
        const v1247 = v1241[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '2')];
        const v1248 = [v1245, v1243, v1247];
        const v1249 = stdlib.Array_set(v1240, stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '1'), v1248);
        stdlib.simTokenBurn(sim_r, v723, v1225);
        const v1250 = v1249[stdlib.checkedBigNumberify('./index.rsh:103:33:application', stdlib.UInt_max, '1')];
        const v1251 = v1250[stdlib.checkedBigNumberify('./index.rsh:103:33:application', stdlib.UInt_max, '2')];
        if (v1251) {
          const v1332 = v1249[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
          const v1333 = v1332[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
          const v1334 = stdlib.gt(v1333, stdlib.checkedBigNumberify('./index.rsh:107:35:decimal', stdlib.UInt_max, '0'));
          if (v1334) {
            const v1340 = stdlib.sub(v773, v1333);
            sim_r.txns.push({
              amt: v1333,
              kind: 'from',
              to: v705,
              tok: undefined /* Nothing */
              });
            const v1342 = stdlib.gt(v1340, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
            if (v1342) {
              sim_r.txns.push({
                amt: v1340,
                kind: 'from',
                to: v754,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v1371 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
            if (v1371) {
              sim_r.txns.push({
                amt: v773,
                kind: 'from',
                to: v754,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}
        else {
          const v1257 = v1250[stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '1')];
          stdlib.simTokenDestroy(sim_r, v723);
          const v1260 = v1250[stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '0')];
          const v1263 = [v1260, v1257, true];
          const v1264 = stdlib.Array_set(v1249, stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '1'), v1263);
          const v1265 = v1264[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
          const v1266 = v1265[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
          const v1267 = stdlib.gt(v1266, stdlib.checkedBigNumberify('./index.rsh:107:35:decimal', stdlib.UInt_max, '0'));
          if (v1267) {
            const v1273 = stdlib.sub(v773, v1266);
            sim_r.txns.push({
              amt: v1266,
              kind: 'from',
              to: v705,
              tok: undefined /* Nothing */
              });
            const v1275 = stdlib.gt(v1273, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
            if (v1275) {
              sim_r.txns.push({
                amt: v1273,
                kind: 'from',
                to: v754,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v1304 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
            if (v1304) {
              sim_r.txns.push({
                amt: v773,
                kind: 'from',
                to: v754,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      else {
        const v1400 = v1224[stdlib.checkedBigNumberify('./index.rsh:103:33:application', stdlib.UInt_max, '2')];
        if (v1400) {
          const v1481 = v772[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
          const v1482 = v1481[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
          const v1483 = stdlib.gt(v1482, stdlib.checkedBigNumberify('./index.rsh:107:35:decimal', stdlib.UInt_max, '0'));
          if (v1483) {
            const v1489 = stdlib.sub(v773, v1482);
            sim_r.txns.push({
              amt: v1482,
              kind: 'from',
              to: v705,
              tok: undefined /* Nothing */
              });
            const v1491 = stdlib.gt(v1489, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
            if (v1491) {
              sim_r.txns.push({
                amt: v1489,
                kind: 'from',
                to: v754,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v1520 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
            if (v1520) {
              sim_r.txns.push({
                amt: v773,
                kind: 'from',
                to: v754,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}
        else {
          const v1406 = v1224[stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '1')];
          stdlib.simTokenDestroy(sim_r, v723);
          const v1412 = [v1225, v1406, true];
          const v1413 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '1'), v1412);
          const v1414 = v1413[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
          const v1415 = v1414[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
          const v1416 = stdlib.gt(v1415, stdlib.checkedBigNumberify('./index.rsh:107:35:decimal', stdlib.UInt_max, '0'));
          if (v1416) {
            const v1422 = stdlib.sub(v773, v1415);
            sim_r.txns.push({
              amt: v1415,
              kind: 'from',
              to: v705,
              tok: undefined /* Nothing */
              });
            const v1424 = stdlib.gt(v1422, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
            if (v1424) {
              sim_r.txns.push({
                amt: v1422,
                kind: 'from',
                to: v754,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          else {
            const v1453 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
            if (v1453) {
              sim_r.txns.push({
                amt: v773,
                kind: 'from',
                to: v754,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              sim_r.txns.push({
                kind: 'halt',
                tok: v706
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc10, ctc1, ctc1, ctc10, ctc12, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1222, time: v1221, didSend: v449, from: v1220 } = txn4;
  ;
  const v1223 = stdlib.addressEq(v754, v1220);
  stdlib.assert(v1223, {
    at: './index.rsh:99:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Platform'
    });
  const v1224 = v772[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '1')];
  const v1225 = v1224[stdlib.checkedBigNumberify('./index.rsh:100:19:application', stdlib.UInt_max, '0')];
  const v1226 = stdlib.gt(v1225, stdlib.checkedBigNumberify('./index.rsh:100:34:decimal', stdlib.UInt_max, '0'));
  if (v1226) {
    const v1234 = stdlib.sub(v1225, v1225);
    const v1237 = v1224[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '1')];
    const v1238 = v1224[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '2')];
    const v1239 = [v1234, v1237, v1238];
    const v1240 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '1'), v1239);
    const v1241 = v1240[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '1')];
    const v1242 = v1241[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '1')];
    const v1243 = stdlib.sub(v1242, v1225);
    const v1245 = v1241[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '0')];
    const v1247 = v1241[stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '2')];
    const v1248 = [v1245, v1243, v1247];
    const v1249 = stdlib.Array_set(v1240, stdlib.checkedBigNumberify('./index.rsh:101:26:application', stdlib.UInt_max, '1'), v1248);
    undefined /* TokenBurn */;
    const v1250 = v1249[stdlib.checkedBigNumberify('./index.rsh:103:33:application', stdlib.UInt_max, '1')];
    const v1251 = v1250[stdlib.checkedBigNumberify('./index.rsh:103:33:application', stdlib.UInt_max, '2')];
    if (v1251) {
      const v1332 = v1249[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1333 = v1332[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1334 = stdlib.gt(v1333, stdlib.checkedBigNumberify('./index.rsh:107:35:decimal', stdlib.UInt_max, '0'));
      if (v1334) {
        const v1340 = stdlib.sub(v773, v1333);
        ;
        const v1342 = stdlib.gt(v1340, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1342) {
          ;
          return;
          }
        else {
          return;
          }}
      else {
        const v1371 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1371) {
          ;
          return;
          }
        else {
          return;
          }}}
    else {
      const v1257 = v1250[stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v1260 = v1250[stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '0')];
      const v1263 = [v1260, v1257, true];
      const v1264 = stdlib.Array_set(v1249, stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '1'), v1263);
      const v1265 = v1264[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1266 = v1265[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1267 = stdlib.gt(v1266, stdlib.checkedBigNumberify('./index.rsh:107:35:decimal', stdlib.UInt_max, '0'));
      if (v1267) {
        const v1273 = stdlib.sub(v773, v1266);
        ;
        const v1275 = stdlib.gt(v1273, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1275) {
          ;
          return;
          }
        else {
          return;
          }}
      else {
        const v1304 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1304) {
          ;
          return;
          }
        else {
          return;
          }}}}
  else {
    const v1400 = v1224[stdlib.checkedBigNumberify('./index.rsh:103:33:application', stdlib.UInt_max, '2')];
    if (v1400) {
      const v1481 = v772[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1482 = v1481[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1483 = stdlib.gt(v1482, stdlib.checkedBigNumberify('./index.rsh:107:35:decimal', stdlib.UInt_max, '0'));
      if (v1483) {
        const v1489 = stdlib.sub(v773, v1482);
        ;
        const v1491 = stdlib.gt(v1489, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1491) {
          ;
          return;
          }
        else {
          return;
          }}
      else {
        const v1520 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1520) {
          ;
          return;
          }
        else {
          return;
          }}}
    else {
      const v1406 = v1224[stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '1')];
      undefined /* TokenDestroy */;
      const v1412 = [v1225, v1406, true];
      const v1413 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./index.rsh:104:29:application', stdlib.UInt_max, '1'), v1412);
      const v1414 = v1413[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1415 = v1414[stdlib.checkedBigNumberify('./index.rsh:107:19:application', stdlib.UInt_max, '0')];
      const v1416 = stdlib.gt(v1415, stdlib.checkedBigNumberify('./index.rsh:107:35:decimal', stdlib.UInt_max, '0'));
      if (v1416) {
        const v1422 = stdlib.sub(v773, v1415);
        ;
        const v1424 = stdlib.gt(v1422, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1424) {
          ;
          return;
          }
        else {
          return;
          }}
      else {
        const v1453 = stdlib.gt(v773, stdlib.checkedBigNumberify('./index.rsh:110:24:decimal', stdlib.UInt_max, '0'));
        if (v1453) {
          ;
          return;
          }
        else {
          return;
          }}}}
  
  
  
  
  
  
  
  };
export async function _plasticWrapAPI_unwrapNFT21(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _plasticWrapAPI_unwrapNFT21 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _plasticWrapAPI_unwrapNFT21 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc2, ctc6, ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Data({
    plasticWrapAPI_unwrapNFT0_88: ctc8,
    plasticWrapAPI_wrapNFT0_88: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v705, v706, v712, v723, v754, v755, v764, v772, v773] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'), [ctc0, ctc1, ctc2, ctc1, ctc0, ctc2, ctc2, ctc5, ctc2]);
  const v821 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:76:47:application call to [unknown function] (defined at: ./index.rsh:76:47:function exp)', 'at ./index.rsh:52:19:application call to "runplasticWrapAPI_unwrapNFT0_88" (defined at: ./index.rsh:75:14:function exp)', 'at ./index.rsh:52:19:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
    msg: 'in',
    who: 'plasticWrapAPI_unwrapNFT'
    });
  const v822 = v821[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v823 = v822[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v824 = v822[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '1')];
  const v825 = v822[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '2')];
  const v826 = v824[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v828 = v825[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v839 = stdlib.eq(v823, stdlib.checkedBigNumberify('./index.rsh:77:27:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v839, {
    at: './index.rsh:77:19:application',
    fs: ['at ./index.rsh:76:47:application call to [unknown function] (defined at: ./index.rsh:76:47:function exp)', 'at ./index.rsh:76:47:application call to [unknown function] (defined at: ./index.rsh:76:47:function exp)', 'at ./index.rsh:52:19:application call to "runplasticWrapAPI_unwrapNFT0_88" (defined at: ./index.rsh:75:14:function exp)', 'at ./index.rsh:52:19:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
    msg: null,
    who: 'plasticWrapAPI_unwrapNFT'
    });
  const v840 = stdlib.eq(v826, stdlib.checkedBigNumberify('./index.rsh:78:28:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v840, {
    at: './index.rsh:78:19:application',
    fs: ['at ./index.rsh:76:47:application call to [unknown function] (defined at: ./index.rsh:76:47:function exp)', 'at ./index.rsh:76:47:application call to [unknown function] (defined at: ./index.rsh:76:47:function exp)', 'at ./index.rsh:52:19:application call to "runplasticWrapAPI_unwrapNFT0_88" (defined at: ./index.rsh:75:14:function exp)', 'at ./index.rsh:52:19:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
    msg: null,
    who: 'plasticWrapAPI_unwrapNFT'
    });
  const v841 = stdlib.eq(v828, stdlib.checkedBigNumberify('./index.rsh:79:28:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v841, {
    at: './index.rsh:79:19:application',
    fs: ['at ./index.rsh:76:47:application call to [unknown function] (defined at: ./index.rsh:76:47:function exp)', 'at ./index.rsh:76:47:application call to [unknown function] (defined at: ./index.rsh:76:47:function exp)', 'at ./index.rsh:52:19:application call to "runplasticWrapAPI_unwrapNFT0_88" (defined at: ./index.rsh:75:14:function exp)', 'at ./index.rsh:52:19:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
    msg: null,
    who: 'plasticWrapAPI_unwrapNFT'
    });
  const v842 = v772[stdlib.checkedBigNumberify('./index.rsh:80:27:application', stdlib.UInt_max, '0')];
  const v843 = v842[stdlib.checkedBigNumberify('./index.rsh:80:27:application', stdlib.UInt_max, '0')];
  const v844 = stdlib.eq(v843, stdlib.checkedBigNumberify('./index.rsh:80:44:decimal', stdlib.UInt_max, '1'));
  stdlib.assert(v844, {
    at: './index.rsh:80:19:application',
    fs: ['at ./index.rsh:76:47:application call to [unknown function] (defined at: ./index.rsh:76:47:function exp)', 'at ./index.rsh:76:47:application call to [unknown function] (defined at: ./index.rsh:76:47:function exp)', 'at ./index.rsh:52:19:application call to "runplasticWrapAPI_unwrapNFT0_88" (defined at: ./index.rsh:75:14:function exp)', 'at ./index.rsh:52:19:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
    msg: null,
    who: 'plasticWrapAPI_unwrapNFT'
    });
  const v855 = ['plasticWrapAPI_unwrapNFT0_88', v821];
  
  const txn1 = await (ctc.sendrecv({
    args: [v705, v706, v712, v723, v754, v755, v764, v772, v773, v855],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:19:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:82:23:decimal', stdlib.UInt_max, '0'), v706], [stdlib.checkedBigNumberify('./index.rsh:82:41:decimal', stdlib.UInt_max, '1'), v723]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v908], secs: v910, time: v909, didSend: v354, from: v907 } = txn1;
      
      switch (v908[0]) {
        case 'plasticWrapAPI_unwrapNFT0_88': {
          const v911 = v908[1];
          sim_r.txns.push({
            kind: 'api',
            who: "plasticWrapAPI_unwrapNFT"
            });
          ;
          const v960 = v772[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v961 = v960[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v965 = v960[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v966 = v960[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
          const v967 = [v961, v965, v966];
          const v968 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0'), v967);
          ;
          const v969 = v968[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v970 = v969[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v971 = stdlib.add(v970, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v974 = v969[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v975 = v969[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
          const v976 = [v971, v974, v975];
          const v977 = stdlib.Array_set(v968, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1'), v976);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v723
            });
          const v990 = v977[stdlib.checkedBigNumberify('./index.rsh:88:28:application', stdlib.UInt_max, '0')];
          const v991 = v990[stdlib.checkedBigNumberify('./index.rsh:88:28:application', stdlib.UInt_max, '0')];
          const v998 = stdlib.sub(v991, stdlib.checkedBigNumberify('./index.rsh:90:24:decimal', stdlib.UInt_max, '1'));
          const v1001 = v990[stdlib.checkedBigNumberify('./index.rsh:90:44:application', stdlib.UInt_max, '1')];
          const v1002 = v990[stdlib.checkedBigNumberify('./index.rsh:90:44:application', stdlib.UInt_max, '2')];
          const v1003 = [v998, v1001, v1002];
          const v1004 = stdlib.Array_set(v977, stdlib.checkedBigNumberify('./index.rsh:90:44:application', stdlib.UInt_max, '0'), v1003);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:90:24:decimal', stdlib.UInt_max, '1'),
            kind: 'from',
            to: v907,
            tok: v706
            });
          const v1005 = true;
          const v1006 = await txn1.getOutput('plasticWrapAPI_unwrapNFT', 'v1005', ctc3, v1005);
          
          const v1812 = v1004;
          const v1813 = v773;
          sim_r.isHalt = false;
          
          break;
          }
        case 'plasticWrapAPI_wrapNFT0_88': {
          const v1062 = v908[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc1, ctc0, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v908], secs: v910, time: v909, didSend: v354, from: v907 } = txn1;
  switch (v908[0]) {
    case 'plasticWrapAPI_unwrapNFT0_88': {
      const v911 = v908[1];
      undefined /* setApiDetails */;
      ;
      const v960 = v772[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
      const v961 = v960[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
      const v965 = v960[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
      const v966 = v960[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
      const v967 = [v961, v965, v966];
      const v968 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0'), v967);
      ;
      const v969 = v968[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
      const v970 = v969[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
      const v971 = stdlib.add(v970, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v974 = v969[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
      const v975 = v969[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
      const v976 = [v971, v974, v975];
      const v977 = stdlib.Array_set(v968, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1'), v976);
      ;
      const v979 = v911[stdlib.checkedBigNumberify('./index.rsh:75:14:spread', stdlib.UInt_max, '0')];
      const v980 = v979[stdlib.checkedBigNumberify('./index.rsh:84:12:array', stdlib.UInt_max, '0')];
      const v981 = v979[stdlib.checkedBigNumberify('./index.rsh:84:12:array', stdlib.UInt_max, '1')];
      const v982 = v979[stdlib.checkedBigNumberify('./index.rsh:84:12:array', stdlib.UInt_max, '2')];
      const v983 = v981[stdlib.checkedBigNumberify('./index.rsh:84:18:array', stdlib.UInt_max, '0')];
      const v985 = v982[stdlib.checkedBigNumberify('./index.rsh:84:32:array', stdlib.UInt_max, '0')];
      const v987 = stdlib.eq(v980, stdlib.checkedBigNumberify('./index.rsh:85:28:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v987, {
        at: './index.rsh:85:20:application',
        fs: ['at ./index.rsh:84:58:application call to [unknown function] (defined at: ./index.rsh:84:58:function exp)'],
        msg: null,
        who: 'plasticWrapAPI_unwrapNFT'
        });
      const v988 = stdlib.eq(v983, stdlib.checkedBigNumberify('./index.rsh:86:29:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v988, {
        at: './index.rsh:86:20:application',
        fs: ['at ./index.rsh:84:58:application call to [unknown function] (defined at: ./index.rsh:84:58:function exp)'],
        msg: null,
        who: 'plasticWrapAPI_unwrapNFT'
        });
      const v989 = stdlib.eq(v985, stdlib.checkedBigNumberify('./index.rsh:87:29:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v989, {
        at: './index.rsh:87:20:application',
        fs: ['at ./index.rsh:84:58:application call to [unknown function] (defined at: ./index.rsh:84:58:function exp)'],
        msg: null,
        who: 'plasticWrapAPI_unwrapNFT'
        });
      const v990 = v977[stdlib.checkedBigNumberify('./index.rsh:88:28:application', stdlib.UInt_max, '0')];
      const v991 = v990[stdlib.checkedBigNumberify('./index.rsh:88:28:application', stdlib.UInt_max, '0')];
      const v992 = stdlib.eq(v991, stdlib.checkedBigNumberify('./index.rsh:88:45:decimal', stdlib.UInt_max, '1'));
      stdlib.assert(v992, {
        at: './index.rsh:88:20:application',
        fs: ['at ./index.rsh:84:58:application call to [unknown function] (defined at: ./index.rsh:84:58:function exp)'],
        msg: null,
        who: 'plasticWrapAPI_unwrapNFT'
        });
      const v998 = stdlib.sub(v991, stdlib.checkedBigNumberify('./index.rsh:90:24:decimal', stdlib.UInt_max, '1'));
      const v1001 = v990[stdlib.checkedBigNumberify('./index.rsh:90:44:application', stdlib.UInt_max, '1')];
      const v1002 = v990[stdlib.checkedBigNumberify('./index.rsh:90:44:application', stdlib.UInt_max, '2')];
      const v1003 = [v998, v1001, v1002];
      const v1004 = stdlib.Array_set(v977, stdlib.checkedBigNumberify('./index.rsh:90:44:application', stdlib.UInt_max, '0'), v1003);
      ;
      const v1005 = true;
      const v1006 = await txn1.getOutput('plasticWrapAPI_unwrapNFT', 'v1005', ctc3, v1005);
      if (v354) {
        stdlib.protect(ctc10, await interact.out(v911, v1006), {
          at: './index.rsh:75:15:application',
          fs: ['at ./index.rsh:75:15:application call to [unknown function] (defined at: ./index.rsh:75:15:function exp)', 'at ./index.rsh:92:22:application call to "apiReturn" (defined at: ./index.rsh:84:58:function exp)', 'at ./index.rsh:84:58:application call to [unknown function] (defined at: ./index.rsh:84:58:function exp)'],
          msg: 'out',
          who: 'plasticWrapAPI_unwrapNFT'
          });
        }
      else {
        }
      
      const v1812 = v1004;
      const v1813 = v773;
      return;
      
      break;
      }
    case 'plasticWrapAPI_wrapNFT0_88': {
      const v1062 = v908[1];
      return;
      break;
      }
    }
  
  
  };
export async function _plasticWrapAPI_wrapNFT21(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _plasticWrapAPI_wrapNFT21 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _plasticWrapAPI_wrapNFT21 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc6 = stdlib.T_Tuple([ctc2, ctc1]);
  const ctc7 = stdlib.T_Tuple([ctc2, ctc6, ctc6]);
  const ctc8 = stdlib.T_Tuple([ctc7]);
  const ctc9 = stdlib.T_Data({
    plasticWrapAPI_unwrapNFT0_88: ctc8,
    plasticWrapAPI_wrapNFT0_88: ctc8
    });
  const ctc10 = stdlib.T_Null;
  
  
  const [v705, v706, v712, v723, v754, v755, v764, v772, v773] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '21'), [ctc0, ctc1, ctc2, ctc1, ctc0, ctc2, ctc2, ctc5, ctc2]);
  const v784 = stdlib.protect(ctc8, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:59:45:application call to [unknown function] (defined at: ./index.rsh:59:45:function exp)', 'at ./index.rsh:52:19:application call to "runplasticWrapAPI_wrapNFT0_88" (defined at: ./index.rsh:58:11:function exp)', 'at ./index.rsh:52:19:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
    msg: 'in',
    who: 'plasticWrapAPI_wrapNFT'
    });
  const v785 = v784[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v786 = v785[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v802 = stdlib.add(v755, stdlib.checkedBigNumberify('./index.rsh:60:30:decimal', stdlib.UInt_max, '1'));
  const v803 = stdlib.eq(v786, v802);
  stdlib.assert(v803, {
    at: './index.rsh:60:17:application',
    fs: ['at ./index.rsh:59:45:application call to [unknown function] (defined at: ./index.rsh:59:45:function exp)', 'at ./index.rsh:59:45:application call to [unknown function] (defined at: ./index.rsh:59:45:function exp)', 'at ./index.rsh:52:19:application call to "runplasticWrapAPI_wrapNFT0_88" (defined at: ./index.rsh:58:11:function exp)', 'at ./index.rsh:52:19:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
    msg: null,
    who: 'plasticWrapAPI_wrapNFT'
    });
  const v804 = v772[stdlib.checkedBigNumberify('./index.rsh:61:25:application', stdlib.UInt_max, '1')];
  const v805 = v804[stdlib.checkedBigNumberify('./index.rsh:61:25:application', stdlib.UInt_max, '0')];
  const v806 = stdlib.eq(v805, v712);
  stdlib.assert(v806, {
    at: './index.rsh:61:17:application',
    fs: ['at ./index.rsh:59:45:application call to [unknown function] (defined at: ./index.rsh:59:45:function exp)', 'at ./index.rsh:59:45:application call to [unknown function] (defined at: ./index.rsh:59:45:function exp)', 'at ./index.rsh:52:19:application call to "runplasticWrapAPI_wrapNFT0_88" (defined at: ./index.rsh:58:11:function exp)', 'at ./index.rsh:52:19:application call to [unknown function] (defined at: ./index.rsh:52:19:function exp)'],
    msg: null,
    who: 'plasticWrapAPI_wrapNFT'
    });
  const v817 = ['plasticWrapAPI_wrapNFT0_88', v784];
  
  const txn1 = await (ctc.sendrecv({
    args: [v705, v706, v712, v723, v754, v755, v764, v772, v773, v817],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc9],
    pay: [v755, [[stdlib.checkedBigNumberify('./index.rsh:63:24:decimal', stdlib.UInt_max, '1'), v706], [stdlib.checkedBigNumberify('./index.rsh:63:42:decimal', stdlib.UInt_max, '0'), v723]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v908], secs: v910, time: v909, didSend: v354, from: v907 } = txn1;
      
      switch (v908[0]) {
        case 'plasticWrapAPI_unwrapNFT0_88': {
          const v911 = v908[1];
          
          break;
          }
        case 'plasticWrapAPI_wrapNFT0_88': {
          const v1062 = v908[1];
          sim_r.txns.push({
            kind: 'api',
            who: "plasticWrapAPI_wrapNFT"
            });
          const v1110 = stdlib.add(v773, v755);
          sim_r.txns.push({
            amt: v755,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1111 = v772[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v1112 = v1111[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v1113 = stdlib.add(v1112, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
          const v1116 = v1111[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v1117 = v1111[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
          const v1118 = [v1113, v1116, v1117];
          const v1119 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0'), v1118);
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v706
            });
          const v1120 = v1119[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v1121 = v1120[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
          const v1125 = v1120[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
          const v1126 = v1120[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
          const v1127 = [v1121, v1125, v1126];
          const v1128 = stdlib.Array_set(v1119, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1'), v1127);
          ;
          const v1181 = v1128[stdlib.checkedBigNumberify('./index.rsh:67:26:application', stdlib.UInt_max, '1')];
          const v1182 = v1181[stdlib.checkedBigNumberify('./index.rsh:67:26:application', stdlib.UInt_max, '0')];
          const v1189 = stdlib.sub(v1182, v712);
          const v1192 = v1181[stdlib.checkedBigNumberify('./index.rsh:69:46:application', stdlib.UInt_max, '1')];
          const v1193 = v1181[stdlib.checkedBigNumberify('./index.rsh:69:46:application', stdlib.UInt_max, '2')];
          const v1194 = [v1189, v1192, v1193];
          const v1195 = stdlib.Array_set(v1128, stdlib.checkedBigNumberify('./index.rsh:69:46:application', stdlib.UInt_max, '1'), v1194);
          sim_r.txns.push({
            amt: v712,
            kind: 'from',
            to: v907,
            tok: v723
            });
          const v1199 = stdlib.sub(v1110, v755);
          sim_r.txns.push({
            amt: v755,
            kind: 'from',
            to: v754,
            tok: undefined /* Nothing */
            });
          const v1200 = await txn1.getOutput('plasticWrapAPI_wrapNFT', 'v723', ctc1, v723);
          
          const v1983 = v1195;
          const v1984 = v1199;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc1, ctc0, ctc2, ctc2, ctc5, ctc2, ctc9],
    waitIfNotPresent: false
    }));
  const {data: [v908], secs: v910, time: v909, didSend: v354, from: v907 } = txn1;
  switch (v908[0]) {
    case 'plasticWrapAPI_unwrapNFT0_88': {
      const v911 = v908[1];
      return;
      break;
      }
    case 'plasticWrapAPI_wrapNFT0_88': {
      const v1062 = v908[1];
      undefined /* setApiDetails */;
      const v1110 = stdlib.add(v773, v755);
      ;
      const v1111 = v772[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
      const v1112 = v1111[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
      const v1113 = stdlib.add(v1112, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
      const v1116 = v1111[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
      const v1117 = v1111[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
      const v1118 = [v1113, v1116, v1117];
      const v1119 = stdlib.Array_set(v772, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0'), v1118);
      ;
      const v1120 = v1119[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
      const v1121 = v1120[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '0')];
      const v1125 = v1120[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1')];
      const v1126 = v1120[stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '2')];
      const v1127 = [v1121, v1125, v1126];
      const v1128 = stdlib.Array_set(v1119, stdlib.checkedBigNumberify('./index.rsh:52:19:dot', stdlib.UInt_max, '1'), v1127);
      ;
      const v1171 = v1062[stdlib.checkedBigNumberify('./index.rsh:58:11:spread', stdlib.UInt_max, '0')];
      const v1172 = v1171[stdlib.checkedBigNumberify('./index.rsh:65:10:array', stdlib.UInt_max, '0')];
      const v1179 = stdlib.add(v755, stdlib.checkedBigNumberify('./index.rsh:66:31:decimal', stdlib.UInt_max, '1'));
      const v1180 = stdlib.eq(v1172, v1179);
      stdlib.assert(v1180, {
        at: './index.rsh:66:18:application',
        fs: ['at ./index.rsh:65:56:application call to [unknown function] (defined at: ./index.rsh:65:56:function exp)'],
        msg: null,
        who: 'plasticWrapAPI_wrapNFT'
        });
      const v1181 = v1128[stdlib.checkedBigNumberify('./index.rsh:67:26:application', stdlib.UInt_max, '1')];
      const v1182 = v1181[stdlib.checkedBigNumberify('./index.rsh:67:26:application', stdlib.UInt_max, '0')];
      const v1183 = stdlib.eq(v1182, v712);
      stdlib.assert(v1183, {
        at: './index.rsh:67:18:application',
        fs: ['at ./index.rsh:65:56:application call to [unknown function] (defined at: ./index.rsh:65:56:function exp)'],
        msg: null,
        who: 'plasticWrapAPI_wrapNFT'
        });
      const v1189 = stdlib.sub(v1182, v712);
      const v1192 = v1181[stdlib.checkedBigNumberify('./index.rsh:69:46:application', stdlib.UInt_max, '1')];
      const v1193 = v1181[stdlib.checkedBigNumberify('./index.rsh:69:46:application', stdlib.UInt_max, '2')];
      const v1194 = [v1189, v1192, v1193];
      const v1195 = stdlib.Array_set(v1128, stdlib.checkedBigNumberify('./index.rsh:69:46:application', stdlib.UInt_max, '1'), v1194);
      ;
      const v1199 = stdlib.sub(v1110, v755);
      ;
      const v1200 = await txn1.getOutput('plasticWrapAPI_wrapNFT', 'v723', ctc1, v723);
      if (v354) {
        stdlib.protect(ctc10, await interact.out(v1062, v1200), {
          at: './index.rsh:58:12:application',
          fs: ['at ./index.rsh:58:12:application call to [unknown function] (defined at: ./index.rsh:58:12:function exp)', 'at ./index.rsh:71:20:application call to "apiReturn" (defined at: ./index.rsh:65:56:function exp)', 'at ./index.rsh:65:56:application call to [unknown function] (defined at: ./index.rsh:65:56:function exp)'],
          msg: 'out',
          who: 'plasticWrapAPI_wrapNFT'
          });
        }
      else {
        }
      
      const v1983 = v1195;
      const v1984 = v1199;
      return;
      
      break;
      }
    }
  
  
  };
export async function plasticWrapAPI_unwrapNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for plasticWrapAPI_unwrapNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for plasticWrapAPI_unwrapNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 21, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [21]');
  if (step == 21) {return _plasticWrapAPI_unwrapNFT21(ctcTop, interact);}
  };
export async function plasticWrapAPI_wrapNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for plasticWrapAPI_wrapNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for plasticWrapAPI_wrapNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 21, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [21]');
  if (step == 21) {return _plasticWrapAPI_wrapNFT21(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`plasticWrapAPI_unwrapNFT((uint64,(uint64,uint64),(uint64,uint64)))byte`, `plasticWrapAPI_wrapNFT((uint64,(uint64,uint64),(uint64,uint64)))uint64`],
    pure: [],
    sigs: [`plasticWrapAPI_unwrapNFT((uint64,(uint64,uint64),(uint64,uint64)))byte`, `plasticWrapAPI_wrapNFT((uint64,(uint64,uint64),(uint64,uint64)))uint64`]
    },
  appApproval: `BiARAAEEICgIMAIGFYoBA6CNBozwgokGBWBYJgMBAAEBACI1ADEYQQmmKmRJIls1ASEFWzUCNhoAF0lBADEiNQQjNQZJIQ0MQAAQIQ0SRDYaATX/KTT/UEIApYGhvNSEBBJENhoBNf8oNP9QQgCRNhoCFzUENhoDNhoBF0kkDEAGWUkhDgxAAoBJIQgMQABvIQgSRCEJNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSVcAIDX/VzggNf4hD1s1/YAEYbSsDLAyBjT9D0Q0/zEAEjT+MQASEUQ0/zQDJVs0AyEEWzQDIQZbNP40AyEQWzT9MgY0A1doIjQDIQpbQgg0SCEJNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpKSVcAIDX/JVs1/iEEWzX9IQZbNfxXOCA1+yEQWzX6IQ9bNflXaCI1+CEKWzX3STUFNfaABKbZHak09lCwMgY0+QxENPYiVUAAyjT2VwEoNfU0+FcAEUk19FcACDT0VwgIUDT0VxABUDT4VxERUDXzNPNXERE18jTzVwARNPIiWyMIFjTyVwgIUDTyVxABUFA18SM0/IgIPTT1STXwIlsiEkQ08FcIECJbIhJENPBXGBAiWyMSRDTxVwARSTXvIltJNe4jEkSxIrIBI7ISJLIQMQCyFDT+shGzgAkAAAAAAAAD7QGwKTUHNP80/jT9NPw0+zT6NPkyBjTuIwkWNO9XCAhQNO9XEAFQNPFXERFQNPdCBwM09lcBKDX1NPqIB500+FcAEUk19CJbIwgWNPRXCAhQNPRXEAFQNPhXERFQNfMjNP6IB44081cRETXyNPNXABE08lcACDTyVwgIUDTyVxABUFA18TT1Ils0+iMIEkQ08VcREUk18CJbSTXvNP0SRLEisgE0/bISJLIQMQCyFDT8shGzsSKyATT6sggjshA0+7IHs4AIAAAAAAAAAtM0/BZQsDT8FjUHNP80/jT9NPw0+zT6NPkyBjTxVwARNO80/QkWNPBXCAhQNPBXEAFQUDT3NPoINPoJQgYqSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSlcAIDX/JVs1/iEEWzX9VzAgNfxXUCI1+4FyWzX6gASRJzTzsDT8MQASRDT7VxERSTX5IltJNfgiDUEB4DT7VwARNPhJCRY0+VcICFA0+VcQAVBQSTX3VxERNfY091cAETT2VwAINPYhBVs0+AkWUDT2VxABUFBJNfVXERFJNfRXEAEXQQC8NPVXABEiW0k18yINQQBiNPo08wk18rEisgE087III7IQNP+yB7M08iINQQAqsSKyATTysggjshA0/LIHs7EisgEishIkshAyCbIVMgqyFDT+shGzQgWBsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCBWc0+iINQQAqsSKyATT6sggjshA0/LIHs7EisgEishIkshAyCbIVMgqyFDT+shGzQgU2sSKyASKyEiSyEDIJshUyCrIUNP6yEbNCBRyxIrIBIQuyEDT9siGzNPVXABE09FcACDT0VwgIUClQUFcAESJbSTXzIg1BAGI0+jTzCTXysSKyATTzsggjshA0/7IHszTyIg1BACqxIrIBNPKyCCOyEDT8sgezsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCBKexIrIBIrISJLIQMgmyFTIKshQ0/rIRs0IEjTT6Ig1BACqxIrIBNPqyCCOyEDT8sgezsSKyASKyEiSyEDIJshUyCrIUNP6yEbNCBFyxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0IEQjT5VxABF0EAvDT7VwARIltJNfciDUEAYjT6NPcJNfaxIrIBNPeyCCOyEDT/sgezNPYiDUEAKrEisgE09rIII7IQNPyyB7OxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0ID4rEisgEishIkshAyCbIVMgqyFDT+shGzQgPINPoiDUEAKrEisgE0+rIII7IQNPyyB7OxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0IDl7EisgEishIkshAyCbIVMgqyFDT+shGzQgN9sSKyASELshA0/bIhszT7VwARNPgWNPlXCAhQKVBQVwARIltJNfciDUEAYjT6NPcJNfaxIrIBNPeyCCOyEDT/sgezNPYiDUEAKrEisgE09rIII7IQNPyyB7OxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0IDCrEisgEishIkshAyCbIVMgqyFDT+shGzQgLwNPoiDUEAKrEisgE0+rIII7IQNPyyB7OxIrIBIrISJLIQMgmyFTIKshQ0/rIRs0ICv7EisgEishIkshAyCbIVMgqyFDT+shGzQgKlSSMMQADuSSEHDEAAYCEHEkQhBzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABEGxQE2wNP8xABJENP80AyVbNAMhBFs0AyEGWzQDV1ogNAOBels0AyEKWzQDgYIBWwgyBjQDVzgiIkIB60gjNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yVbNf4hBFs1/SEGWzX8VzgiNftJNQVJIls1+iEFWzX5gATHtgrVNPoWUDT5FlCwNP80/hZQNP0WUDT8FlA0+1AxAFA0+hZQNPkWUDIGFlAoSwFXAH9nKUsBV38TZ0ghBzUBMgY1AkIBzUgiNAESRDQESSISTDQCEhFESTUFSUpKSSJbNf9XCAEXNf5XCSA1/VcpCDX8VzFgNftXkSA1+oGxAVs1+YAEttedkTT/FlA0/hZRBwhQNP1QNPxQNPtQNPpQNPkWULAhDIgBp4ERr0k1+ElQSTX3VwARNfYhBa809lcICFA09lcQAVA091cREVA19SEMiAF7sSKyASKyEiSyEDIKshQ0/7IRsyEMiAFjsSKyASELshA0+bIiIQiyIzT8siU0/bImNPuyJzT6sigyCrIps7Q8NfSACAAAAAAAAALSNPQWULA09Ek18zT/FiJbE0Q09VcRETXyNPVXABE0+RY08lcICFA08lcQAVBQSTXxVxERNfA08VcAETTwVwAINPkWUDTwVxABUFBJNe9XERE17jTvVwARNO5XAAg07lcICFAoUFA17TEANP8WUDT5FlA08xZQNO1QKEsBVwBaZ0gjNQEyBjUCQgBpNf81/jX9Nfw1+zX6Nfk1+DX3STX2NPcWUDT4FlA0+RZQNPpQNPsWUDT8FlA0/lA0/xZQKEsBVwB/ZylLAVd/E2dIIQk1ATIGNQJCABwxGSEOEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yI1ASI1AkL/wzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 146,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v706",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v707",
                "type": "bool"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T4",
                "name": "v708",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T5",
                "name": "v709",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T6",
                "name": "v710",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T4",
                "name": "v711",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v712",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v706",
                "type": "address"
              },
              {
                "internalType": "bool",
                "name": "v707",
                "type": "bool"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T4",
                "name": "v708",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes8",
                    "name": "elem0",
                    "type": "bytes8"
                  }
                ],
                "internalType": "struct T5",
                "name": "v709",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T6",
                "name": "v710",
                "type": "tuple"
              },
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  }
                ],
                "internalType": "struct T4",
                "name": "v711",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "v712",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v755",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v756",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T22",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "elem0",
                            "type": "uint256"
                          },
                          {
                            "components": [
                              {
                                "internalType": "uint256",
                                "name": "elem0",
                                "type": "uint256"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem1",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T19",
                            "name": "elem1",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "uint256",
                                "name": "elem0",
                                "type": "uint256"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem1",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T19",
                            "name": "elem2",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T20",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_plasticWrapAPI_unwrapNFT0_88",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "elem0",
                            "type": "uint256"
                          },
                          {
                            "components": [
                              {
                                "internalType": "uint256",
                                "name": "elem0",
                                "type": "uint256"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem1",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T19",
                            "name": "elem1",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "uint256",
                                "name": "elem0",
                                "type": "uint256"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem1",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T19",
                            "name": "elem2",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T20",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_plasticWrapAPI_wrapNFT0_88",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T22",
                "name": "v908",
                "type": "tuple"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1005",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v722",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v723",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v755",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v756",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T22",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "elem0",
                            "type": "uint256"
                          },
                          {
                            "components": [
                              {
                                "internalType": "uint256",
                                "name": "elem0",
                                "type": "uint256"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem1",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T19",
                            "name": "elem1",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "uint256",
                                "name": "elem0",
                                "type": "uint256"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem1",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T19",
                            "name": "elem2",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T20",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_plasticWrapAPI_unwrapNFT0_88",
                    "type": "tuple"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "elem0",
                            "type": "uint256"
                          },
                          {
                            "components": [
                              {
                                "internalType": "uint256",
                                "name": "elem0",
                                "type": "uint256"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem1",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T19",
                            "name": "elem1",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "uint256",
                                "name": "elem0",
                                "type": "uint256"
                              },
                              {
                                "internalType": "address payable",
                                "name": "elem1",
                                "type": "address"
                              }
                            ],
                            "internalType": "struct T19",
                            "name": "elem2",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T20",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T21",
                    "name": "_plasticWrapAPI_wrapNFT0_88",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T22",
                "name": "v908",
                "type": "tuple"
              }
            ],
            "internalType": "struct T23",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T24",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "elem1",
                "type": "address"
              }
            ],
            "internalType": "struct T19",
            "name": "elem1",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "elem1",
                "type": "address"
              }
            ],
            "internalType": "struct T19",
            "name": "elem2",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "plasticWrapAPI_unwrapNFT",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "elem0",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "elem1",
                "type": "address"
              }
            ],
            "internalType": "struct T19",
            "name": "elem1",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "elem1",
                "type": "address"
              }
            ],
            "internalType": "struct T19",
            "name": "elem2",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "plasticWrapAPI_wrapNFT",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620047bc380380620047bc833981016040819052620000269162000912565b60008055436003556200003862000510565b6040805133815283516020808301919091528085015180516001600160a01b031683850152808201511515606080850191909152818501515160808086019190915290820151516001600160c01b03191660a08086019190915290820151805160c0808701919091529381015160e086015285015161010085015281015151610120840152015161014082015290517f2eb572a73fbd7364b26faa76df56fea02d52800736ec367fd5fb132fbea87de7918190036101600190a1805160009081905281516020908101829052825160409081018390528351828501805191909152845181518401528185018051859052815151840151815190940193909352805151820151835190151592019190915251905162000157929062000463565b60608201526200016a34156007620004e6565b602082810151604090810151518151928301520160408051601f198184030181529082905260208481015160600151516001600160c01b031916908301529060280160408051808303601f190181528282526020868101516080908101518051818401519186015193870152938501939093526060840152910160408051601f1981840301815282825260208781015160a0015151908401529101604051602081830303815290604052856020015160c0015160126040516200022d9062000625565b6200023e9695949392919062000a53565b604051809103906000f0801580156200025b573d6000803e3d6000fd5b506001600160a01b03166080820181905260a082018190526040519081527fbe24c494ad12bcaa8a204efc28d645b18c5e04bf88446350a37d8d3d4fd7a87c9060200160405180910390a160208201515160c0820180516001600160a01b039283169052515160a0830151620002e992908116911614620002de576001620002e1565b60005b6008620004e6565b60208281015160c0015160e08301805191909152606083018051830151830151825184015280519092015160409081015182519015159101529051905162000335919060019062000463565b61010082018181526020918201515161012084018051919091528483015160c001518151840152815190920151604090810151835190151591015251905162000382919060019062000463565b6101408201818152602091820151516101608401805191909152815183015183015181519093019290925281516000604090910152519051620003c9919060019062000463565b610180820152620003d962000633565b33815260208084018051516001600160a01b0390811683850152905160c0015160408085019190915260a0850151909116606084015261018084015160808401526001600081905543905551620004339183910162000abe565b60405160208183030381529060405260029080519060200190620004599291906200067f565b5050505062000baa565b6200046d6200070e565b60005b6002811015620004c3578481600281106200048f576200048f620009ed565b6020020151828260028110620004a957620004a9620009ed565b602002015280620004ba8162000b43565b91505062000470565b5081818460028110620004da57620004da620009ed565b60200201529392505050565b816200050c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051610200810190915260006101a082018181526101c083018290526101e0830191909152815260208101620005476200070e565b81526040805160608101825260008082526020828101829052928201529101908152602001620005766200070e565b81526000602082018190526040820152606001620005936200075b565b81526040805160608101825260008082526020828101829052928201529101908152602001620005c26200070e565b81526040805160608101825260008082526020828101829052928201529101908152602001620005f16200070e565b81526040805160608101825260008082526020828101829052928201529101908152602001620006206200070e565b905290565b611087806200373583390190565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001620006206200070e565b8280546200068d9062000b6d565b90600052602060002090601f016020900481019282620006b15760008555620006fc565b82601f10620006cc57805160ff1916838001178555620006fc565b82800160010185558215620006fc579182015b82811115620006fc578251825591602001919060010190620006df565b506200070a92915062000779565b5090565b60405180604001604052806002905b62000744604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200071d5790505090565b60405180602001604052806001906020820280368337509192915050565b5b808211156200070a57600081556001016200077a565b604051602081016001600160401b0381118282101715620007c157634e487b7160e01b600052604160045260246000fd5b60405290565b604080519081016001600160401b0381118282101715620007c157634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715620007c157634e487b7160e01b600052604160045260246000fd5b805180151581146200083a57600080fd5b919050565b6000602082840312156200085257600080fd5b6200085c62000790565b9151825250919050565b6000602082840312156200087957600080fd5b6200088362000790565b82519091506001600160c01b0319811681146200089f57600080fd5b815292915050565b600060608284031215620008ba57600080fd5b604051606081016001600160401b0381118282101715620008eb57634e487b7160e01b600052604160045260246000fd5b80604052508091508251815260208301516020820152604083015160408201525092915050565b60008183036101408112156200092757600080fd5b62000931620007c7565b8351815261012080601f19840112156200094a57600080fd5b62000954620007f8565b60208601519093506001600160a01b03811681146200097257600080fd5b8352620009826040860162000829565b60208401526200099686606087016200083f565b6040840152620009aa866080870162000866565b6060840152620009be8660a08701620008a7565b6080840152620009d38661010087016200083f565b60a0840152939093015160c0820152602083015250919050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b8181101562000a2b5760208185018101518683018201520162000a0d565b8181111562000a3e576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000a6860c083018962000a03565b828103602084015262000a7c818962000a03565b9050828103604084015262000a92818862000a03565b9050828103606084015262000aa8818762000a03565b6080840195909552505060a00152949350505050565b81516001600160a01b039081168252602080840151821681840152604080850151818501526060808601519093168385015260808086015161014086019490939291860160005b600281101562000b37578551805183528581015186840152840151151584830152948401949082019060010162000b05565b50505050505092915050565b600060001982141562000b6657634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c9082168062000b8257607f821691505b6020821081141562000ba457634e487b7160e01b600052602260045260246000fd5b50919050565b612b7b8062000bba6000396000f3fe60806040526004361061008f5760003560e01c806383230757116100565780638323075714610130578063a7661d5414610145578063ab53f2c614610158578063c79800371461017b578063e799458a1461018e57005b80631d06719f146100985780631e93b0f1146100c857806339b40242146100e757806342ae229d1461010a5780637eea518c1461011d57005b3661009657005b005b6100ab6100a636600461228c565b6101a1565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100d457600080fd5b506003545b6040519081526020016100bf565b6100fa6100f536600461228c565b61020a565b60405190151581526020016100bf565b6100966101183660046122a8565b610270565b61009661012b3660046122c0565b6102a0565b34801561013c57600080fd5b506001546100d9565b6100966101533660046122c0565b6102cc565b34801561016457600080fd5b5061016d6102f8565b6040516100bf9291906122fe565b6100966101893660046122c0565b610395565b61009661019c366004612338565b6103c1565b60006101bd604080518082019091526000808252602082015290565b6101c5611c45565b6101cd611c64565b6040805160208082018352878252838301919091526001835281518082019092528282528301526101fe82846103e9565b50506020015192915050565b6000610226604080518082019091526000808252602082015290565b61022e611c45565b610236611c64565b60408051602080820183528782528381019190915260008352815180820190925282825283015261026782846103e9565b50505192915050565b604080518082019091526000808252602082015261029c61029636849003840184612361565b82610acc565b5050565b604080518082019091526000808252602082015261029c6102c6368490038401846123c9565b82610ca4565b604080518082019091526000808252602082015261029c6102f2368490038401846123c9565b82610e75565b60006060600054600280805461030d90612401565b80601f016020809104026020016040519081016040528092919081815260200182805461033990612401565b80156103865780601f1061035b57610100808354040283529160200191610386565b820191906000526020600020905b81548152906001019060200180831161036957829003601f168201915b50505050509050915091509091565b604080518082019091526000808252602082015261029c6103bb368490038401846123c9565b82611541565b604080518082019091526000808252602082015261029c6103e736849003840184612483565b825b6103f96015600054146020611730565b815161041490158061040d57508251600154145b6021611730565b60008080556002805461042690612401565b80601f016020809104026020016040519081016040528092919081815260200182805461045290612401565b801561049f5780601f106104745761010080835404028352916020019161049f565b820191906000526020600020905b81548152906001019060200180831161048257829003601f168201915b50505050508060200190518101906104b791906125c8565b90506104c1611c8c565b6104d28260c0015143106022611730565b7f15cc3e48496556d2aca676a71a30517da71180c0f6eb6f7d0556880c0202f9c833856040516105039291906126a3565b60405180910390a160006020850151515160018111156105255761052561234b565b14156107a657602080850151510151815261054234156014611730565b60e082018051515160208381018051929092528251518101518251909101528151516040908101518251901515910152905190516105839190600090611756565b81604001819052506105a561059e33846020015160006117ca565b6015611730565b604081015160200151516105bb90600190612743565b606082018051919091526040808301805160209081015181015184518201528151015182015183519015159201919091525190516105fc9190600190611756565b816080018190525061061e61061733846060015160016117ca565b6016611730565b8051515161062e90156017611730565b805151602001515161064290156018611730565b8051516040015151610658906001146019611730565b6080810151515161066d90600114601a611730565b608081015151516106809060019061275b565b60a0820180519190915260808201805151602090810151835182015290515160409081015192519215159201919091528201516106bf903360016117e2565b604051600181527f226566e647cf2660d629067eb57c74f1a113986ec1d038040076154ecee63e239060200160405180910390a1600183526106ff611da4565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451909101526060808601518451908416910152608080860151845193169281019290925260a080860151845182015260c08087015185519091015290830151439052908301519083015161077d9190600090611756565b60208083018051909101919091526101008401519051604001526107a0816117fb565b50610ac6565b60016020850151515160018111156107c0576107c061234b565b1415610ac6576020840151516040015160c082015260a08201516107e7903414601b611730565b60e082015151516107fa90600190612743565b60e0828101805192909252830180515160209081015183519091015280515160409081015183519015159101525190516108379190600090611756565b81610100018190525061085a61085333846020015160016117ca565b601c611730565b61010081018051602090810151516101208401805191909152825182015182015181518301528251909101516040908101518251901515910152905190516108a59190600190611756565b8161014001819052506108c86108c133846060015160006117ca565b601d611730565b6108eb60018360a001516108dc9190612743565b60c0830151515114601e611730565b604082015161014082015160200151516109079114601f611730565b60408201516101408201516020015151610921919061275b565b61016082018051919091526101408201805160209081015181015183518201529051015160409081015191519115159181019190915260608301519083015161096c919033906117e2565b81608001516001600160a01b03166108fc8360a001519081150290604051600060405180830381858888f193505050501580156109ad573d6000803e3d6000fd5b5060608201516040516001600160a01b0390911681527f92326d40e2284e28da737fe6ef9e45b58f58f6f09106ea5810529be3c83cfce09060200160405180910390a160608201516001600160a01b03166020840152610a0b611da4565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519091015260608086015184519084169101526080808601518451931692019190915260a08085015183519091015260c080850151835190910152810151439052610140820151610160830151610a8c9190600190611756565b602080830151015260a0830151610100840151610aaa908290612743565b610ab4919061275b565b6020820151604001526107a0816117fb565b50505050565b610adc600160005414600a611730565b8151610af7901580610af057508251600154145b600b611730565b600080805560028054610b0990612401565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3590612401565b8015610b825780601f10610b5757610100808354040283529160200191610b82565b820191906000526020600020905b815481529060010190602001808311610b6557829003601f168201915b5050505050806020019051810190610b9a9190612772565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd93919081900360800190a1610bf934156009611730565b610c01611df2565b81516001600160a01b0390811682526020808401518216818401526040808501518185015260608086015190931692840192909252608080850151908401523360a084015285810180515160c08501525181015160e084015243610100840181905260026000556001559051610c799183910161283f565b60405160208183030381529060405260029080519060200190610c9d929190611e68565b5050505050565b610cb4600260005414600e611730565b8151610ccf901580610cc857508251600154145b600f611730565b600080805560028054610ce190612401565b80601f0160208091040260200160405190810160405280929190818152602001828054610d0d90612401565b8015610d5a5780601f10610d2f57610100808354040283529160200191610d5a565b820191906000526020600020905b815481529060010190602001808311610d3d57829003601f168201915b5050505050806020019051810190610d7291906128df565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503384604051610da592919061297e565b60405180910390a1610db93415600c611730565b8051610dd1906001600160a01b03163314600d611730565b610dd9611da4565b815181516001600160a01b0391821690526020808401518351908316910152604080840151835190910152606080840151835190831691015260a0808401518351921660809092019190915260c083015182519091015260e0820151610100830151610e459190612743565b815160c00152602080820180514390526080840151815190920191909152516000604090910152610ac6816117fb565b610e856004600054146012611730565b8151610ea0901580610e9957508251600154145b6013611730565b600080805560028054610eb290612401565b80601f0160208091040260200160405190810160405280929190818152602001828054610ede90612401565b8015610f2b5780601f10610f0057610100808354040283529160200191610f2b565b820191906000526020600020905b815481529060010190602001808311610f0e57829003601f168201915b5050505050806020019051810190610f4391906129a6565b9050610f4d611eec565b7faa99e317c364fb804a6b7e67b51beee98735c62eb3df9d8182015e63bb1907223385604051610f7e92919061297e565b60405180910390a1610f9234156010611730565b6060820151610fad906001600160a01b031633146011611730565b60808201516020015151156112f25760808201516020015151610fd0908061275b565b81515260808201805160209081015181015183518201528151015160409081015183519015159101525181516110099190600190611756565b6020828101828152918101515160408401515260808401518101515191518101510151611036919061275b565b6040828101805160209081019390935282840180519093015182015181519015159201919091529051905161106e9190600190611756565b606082015260408201516080830151602001515161108c91906118b7565b60608101516020015160400151156111cd576060810151515115611182576060810151515160a08301516110c0919061275b565b60c08201528151606082015151516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611104573d6000803e3d6000fd5b5060c08101511561116c5781606001516001600160a01b03166108fc8260c001519081150290604051600060405180830381858888f19350505050158015611150573d6000803e3d6000fd5b506000808055600181905561116790600290611fbb565b610ac6565b6000808055600181905561116790600290611fbb565b60a08201511561116c5781606001516001600160a01b03166108fc8360a001519081150290604051600060405180830381858888f19350505050158015611150573d6000803e3d6000fd5b6111da82604001516118ca565b6060810180516020908101515160808401805191909152825182015182015181519092019190915280516001604091909101819052915190516000926112209291611756565b515111156111825761123c816060015160018360800151611756565b515160a083015161124d919061275b565b8160a001818152505081600001516001600160a01b03166108fc61127b836060015160018560800151611756565b5151604051811592909202916000818181858888f193505050501580156112a6573d6000803e3d6000fd5b5060a08101511561116c5781606001516001600160a01b03166108fc8260a001519081150290604051600060405180830381858888f19350505050158015611150573d6000803e3d6000fd5b60808201516020015160400151156113b9576080820151515115611182576080820151515160a0830151611326919061275b565b6101208201528151608083015151516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561136b573d6000803e3d6000fd5b506101208101511561116c5781606001516001600160a01b03166108fc8261012001519081150290604051600060405180830381858888f19350505050158015611150573d6000803e3d6000fd5b6113c682604001516118ca565b6080820180516020908101515160e0840180519190915282518201518201518151909201919091528051600160409091018190529151905160009261140b9291611756565b515111156114e057611427826080015160018360e00151611756565b515160a0830151611438919061275b565b8161010001818152505081600001516001600160a01b03166108fc611467846080015160018560e00151611756565b5151604051811592909202916000818181858888f19350505050158015611492573d6000803e3d6000fd5b506101008101511561116c5781606001516001600160a01b03166108fc8261010001519081150290604051600060405180830381858888f19350505050158015611150573d6000803e3d6000fd5b60a08201511561152b5781606001516001600160a01b03166108fc8360a001519081150290604051600060405180830381858888f19350505050158015611150573d6000803e3d6000fd5b60008080556001819055610ac690600290611fbb565b6115516015600054146025611730565b815161156c90158061156557508251600154145b6026611730565b60008080556002805461157e90612401565b80601f01602080910402602001604051908101604052809291908181526020018280546115aa90612401565b80156115f75780601f106115cc576101008083540402835291602001916115f7565b820191906000526020600020905b8154815290600101906020018083116115da57829003601f168201915b505050505080602001905181019061160f91906125c8565b90506116238160c001514310156027611730565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae338460405161165492919061297e565b60405180910390a161166834156023611730565b805161169c906001600160a01b031633146116925760808201516001600160a01b03163314611695565b60015b6024611730565b6116a4611da4565b815181516001600160a01b039182169052602080840151835190831690820152604080850151845182015260608086015185519085169101526080808601518551941693019290925260a08085015184519091015260c080850151845190910152808301805143905260e0850151815190920191909152610100840151905190910152610ac6816117fb565b8161029c5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b61175e611ff5565b60005b60028110156117aa5784816002811061177c5761177c612717565b602002015182826002811061179357611793612717565b6020020152806117a281612a4a565b915050611761565b50818184600281106117be576117be612717565b60200201529392505050565b60006117d8838530856118df565b90505b9392505050565b6117ed8383836119b9565b6117f657600080fd5b505050565b611803612040565b8151516001600160a01b03908116825282516020908101518216818401528351604090810151818501528451606090810151841690850152845160809081015190931692840192909252835160a09081015190840152835160c09081015190840152808401805182015160e085015251820151610100840152601560005543600155905161189391839101612a65565b604051602081830303815290604052600290805190602001906117f6929190611e68565b6118c18282611a8a565b61029c57600080fd5b6118d381611b65565b6118dc57600080fd5b50565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161194691612b0c565b60006040518083038185875af1925050503d8060008114611983576040519150601f19603f3d011682016040523d82523d6000602084013e611988565b606091505b509150915061199982826001611c0a565b50808060200190518101906119ae9190612b28565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611a1891612b0c565b60006040518083038185875af1925050503d8060008114611a55576040519150601f19603f3d011682016040523d82523d6000602084013e611a5a565b606091505b5091509150611a6b82826002611c0a565b5080806020019051810190611a809190612b28565b9695505050505050565b6000806000846001600160a01b031660006342966c6860e01b86604051602401611ab691815260200190565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611af49190612b0c565b60006040518083038185875af1925050503d8060008114611b31576040519150601f19603f3d011682016040523d82523d6000602084013e611b36565b606091505b5091509150611b4782826003611c0a565b5080806020019051810190611b5c9190612b28565b95945050505050565b60408051600481526024810182526020810180516001600160e01b031663083197ef60e41b1790529051600091829182916001600160a01b038616918391611bac91612b0c565b60006040518083038185875af1925050503d8060008114611be9576040519150601f19603f3d011682016040523d82523d6000602084013e611bee565b606091505b5091509150611bff82826004611c0a565b506001949350505050565b60608315611c195750816117db565b825115611c295782518084602001fd5b60405163100960cb60e01b81526004810183905260240161174d565b604051806040016040528060008152602001611c5f6120b6565b905290565b60408051606081019091528060008152602001611c7f6120c9565b8152602001611c5f6120c9565b604051806101800160405280611ca06120c9565b81526040805160608101825260008082526020828101829052928201529101908152602001611ccd611ff5565b81526040805160608101825260008082526020828101829052928201529101908152602001611cfa611ff5565b81526040805160608101825260008082526020828101829052928201529101908152602001611d276120c9565b81526040805160608101825260008082526020828101829052928201529101908152602001611d54611ff5565b81526040805160608101825260008082526020828101829052928201529101908152602001611d81611ff5565b815260408051606081018252600080825260208281018290529282015291015290565b60408051610120810182526000918101828152606082018390526080820183905260a0820183905260c0820183905260e0820183905261010082019290925290815260208101611c5f6120dc565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001611e3d611ff5565b815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b828054611e7490612401565b90600052602060002090601f016020900481019282611e965760008555611edc565b82601f10611eaf57805160ff1916838001178555611edc565b82800160010185558215611edc579182015b82811115611edc578251825591602001919060010190611ec1565b50611ee89291506120f6565b5090565b604080516101a08101909152600061014082018181526101608301829052610180830191909152815260208101611f21611ff5565b81526040805160608101825260008082526020828101829052928201529101908152602001611f4e611ff5565b815260408051606081018252600080825260208281018290529282015291019081526020016000815260200160008152602001611fa7604051806060016040528060008152602001600081526020016000151581525090565b815260200160008152602001600081525090565b508054611fc790612401565b6000825580601f10611fd7575050565b601f0160209004906000526020600020908101906118dc91906120f6565b60405180604001604052806002905b61202a604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816120045790505090565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016120a9611ff5565b8152602001600081525090565b6040518060200160405280611c5f611c64565b6040518060200160405280611c5f61210b565b6040518060600160405280600081526020016120a9611ff5565b5b80821115611ee857600081556001016120f7565b60405180606001604052806000815260200161214360405180604001604052806000815260200160006001600160a01b031681525090565b8152602001611c5f60405180604001604052806000815260200160006001600160a01b031681525090565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff811182821017156121a7576121a761216e565b60405290565b6040516060810167ffffffffffffffff811182821017156121a7576121a761216e565b604051610120810167ffffffffffffffff811182821017156121a7576121a761216e565b6001600160a01b03811681146118dc57600080fd5b60006040828403121561221b57600080fd5b612223612184565b9050813581526020820135612237816121f4565b602082015292915050565b600060a0828403121561225457600080fd5b61225c6121ad565b90508135815261226f8360208401612209565b60208201526122818360608401612209565b604082015292915050565b600060a0828403121561229e57600080fd5b6117db8383612242565b6000606082840312156122ba57600080fd5b50919050565b6000604082840312156122ba57600080fd5b60005b838110156122ed5781810151838201526020016122d5565b83811115610ac65750506000910152565b82815260406020820152600082518060408401526123238160608501602087016122d2565b601f01601f1916919091016060019392505050565b600061018082840312156122ba57600080fd5b634e487b7160e01b600052602160045260246000fd5b6000818303606081121561237457600080fd5b61237c612184565b833581526040601f198301121561239257600080fd5b61239a612184565b60208581013582526040909501358582015293810193909352509092915050565b80151581146118dc57600080fd5b6000604082840312156123db57600080fd5b6123e3612184565b8235815260208301356123f5816123bb565b60208201529392505050565b600181811c9082168061241557607f821691505b602082108114156122ba57634e487b7160e01b600052602260045260246000fd5b600060a0828403121561244857600080fd5b6040516020810181811067ffffffffffffffff8211171561246b5761246b61216e565b60405290508061247b8484612242565b905292915050565b600081830361018081121561249757600080fd5b61249f612184565b83358152610160601f19830112156124b657600080fd5b60405191506020820182811067ffffffffffffffff821117156124db576124db61216e565b6040526124e66121ad565b6020850135600281106124f857600080fd5b81526125078660408701612436565b60208201526125198660e08701612436565b6040820152825260208101919091529392505050565b805161253a816121f4565b919050565b600082601f83011261255057600080fd5b612558612184565b8060c084018581111561256a57600080fd5b845b818110156125bd57606081880312156125855760008081fd5b61258d6121ad565b81518152602080830151818301526040808401516125aa816123bb565b908301529085529093019260600161256c565b509095945050505050565b60006101c082840312156125db57600080fd5b6125e36121d0565b6125ec8361252f565b81526125fa6020840161252f565b6020820152604083015160408201526126156060840161252f565b60608201526126266080840161252f565b608082015260a083015160a082015260c083015160c082015261264c8460e0850161253f565b60e08201526101a0929092015161010083015250919050565b51805182526020808201518051828501528101516001600160a01b039081166040808601919091529092015180516060850152015116608090910152565b6001600160a01b038316815281516020808301919091528201515180516101a083019190600281106126e557634e487b7160e01b600052602160045260246000fd5b604084015260208101516126fc6060850182612665565b506040015161270f610100840182612665565b509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156127565761275661272d565b500190565b60008282101561276d5761276d61272d565b500390565b6000610140828403121561278557600080fd5b60405160a0810181811067ffffffffffffffff821117156127a8576127a861216e565b60405282516127b6816121f4565b815260208301516127c6816121f4565b60208201526040838101519082015260608301516127e3816121f4565b60608201526127f5846080850161253f565b60808201529392505050565b8060005b6002811015610ac6578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612805565b81516001600160a01b031681526101c08101602083015161286b60208401826001600160a01b03169052565b5060408301516040830152606083015161289060608401826001600160a01b03169052565b5060808301516128a36080840182612801565b5060a08301516001600160a01b031661014083015260c083015161016083015260e0830151610180830152610100909201516101a09091015290565b60006101c082840312156128f257600080fd5b6128fa6121d0565b6129038361252f565b81526129116020840161252f565b60208201526040830151604082015261292c6060840161252f565b606082015261293e846080850161253f565b6080820152612950610140840161252f565b60a082015261016083015160c082015261018083015160e08201526101a09092015161010083015250919050565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b600061016082840312156129b957600080fd5b60405160c0810181811067ffffffffffffffff821117156129dc576129dc61216e565b60405282516129ea816121f4565b815260208301516129fa816121f4565b60208201526040830151612a0d816121f4565b60408201526060830151612a20816121f4565b6060820152612a32846080850161253f565b6080820152610140929092015160a083015250919050565b6000600019821415612a5e57612a5e61272d565b5060010190565b81516001600160a01b031681526020808301516101c0830191612a92908401826001600160a01b03169052565b50604083015160408301526060830151612ab760608401826001600160a01b03169052565b506080830151612ad260808401826001600160a01b03169052565b5060a083015160a083015260c083015160c083015260e0830151612af960e0840182612801565b506101008301516101a083015292915050565b60008251612b1e8184602087016122d2565b9190910192915050565b600060208284031215612b3a57600080fd5b81516117db816123bb56fea26469706673582212203575795ab63c81e509537f760026b4b91a6caa7eebf51784fd3470e29778464264736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220528521f98a942a20422481eb0354fbffdc6d62096c0134f5559401d4ad31d37064736f6c634300080c0033`,
  BytecodeLen: 18364,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:40:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:46:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:97:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  19: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  20: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  21: {
    at: './index.rsh:52:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "NFTOwner": NFTOwner,
  "Platform": Platform,
  "plasticWrapAPI_unwrapNFT": plasticWrapAPI_unwrapNFT,
  "plasticWrapAPI_wrapNFT": plasticWrapAPI_wrapNFT
  };
export const _APIs = {
  plasticWrapAPI: {
    unwrapNFT: plasticWrapAPI_unwrapNFT,
    wrapNFT: plasticWrapAPI_wrapNFT
    }
  };
