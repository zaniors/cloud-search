export class OwnCloudMusicItem {
    // 作者 数组列表
    artistName: OwnArtistName[];
    songName: string;
    songId: number;
    mvId: number;
    picUrl: string;
}

export class OwnArtistName {
    artistId: number;
    artistName: string;
}

export class OwnCloudMusicOutput {
    type: string;
    items: OwnCloudMusicItem[];
}

export interface CloudMusicSong {
    result: {
        songs: CloudMusicSongItem[];
        songCount: number;
    };
}

export interface CloudMusicSongItem {
    name: string;
    id: number;
    pst: number;
    t: number;
    ar: Ar[];
    alia: any[];
    pop: number;
    st: number;
    rt: null | string;
    fee: number;
    v: number;
    crbt: null;
    cf: string;
    al: Al;
    dt: number;
    h: L | null;
    m: L | null;
    l: L;
    a: null;
    cd: string;
    no: number;
    rtUrl: null;
    ftype: number;
    rtUrls: any[];
    djId: number;
    copyright: number;
    s_id: number;
    rtype: number;
    rurl: null;
    mst: number;
    cp: number;
    mv: number;
    publishTime: number;
    privilege: Privilege;
}

export interface Al {
    id: number;
    name: string;
    picUrl: string;
    tns: any[];
    pic_str?: string;
    pic: number;
}

export interface Ar {
    id: number;
    name: string;
    tns: any[];
    alias: any[];
}

export interface L {
    br: number;
    fid: number;
    size: number;
    vd: number;
}

export interface Privilege {
    id: number;
    fee: number;
    payed: number;
    st: number;
    pl: number;
    dl: number;
    sp: number;
    cp: number;
    subp: number;
    cs: boolean;
    maxbr: number;
    fl: number;
    toast: boolean;
    flag: number;
}

