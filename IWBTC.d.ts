declare class Vector2 {
    x: number;
    y: number;
    constructor(x: number, y: number);
}

declare class Game {
    static Quit(): void;
    static Reload(): void;
    static Restart(): void;
    static Win(): void;
    static Over(): void;
}

/**
 * 信息面板
 */
declare class InfoBox {
    /**
     * 为信息面板添加信息
     * @param str 信息
     * @param displayTime 显示时间
     */
    static AddInfo(str: string, displayTime: number): void;
    /**
     * 清空当前信息面板并添加信息
     * @param str 信息
     * @param displayTime 显示时间
     */
    static ClearAndAddInfo(str: string, displayTime: number): void;
    /**
     * 清空信息面板
     */
    static Clear(): void;
}

declare class Level {

}

declare class Sound {

}

declare class UnitData {
    // static Get(id: string): UnitData;
}

declare class Unit {
    static Create(unitData: UnitData, pos: Vector2): Unit;
    static Find(id: string): Unit;
    static GetPlayerUnit(): Unit;
    Destroy(): void;
    DestroyAfter(time: number): void;
    SetActive(active: boolean): void
    SetPos(pos: Vector2): void;
}

declare class VarManager {
    static GetGlobalVar(name: string): any;
    static GetLocalVar(name: string): any;
    static GetUnitVar(unit: Unit, name: string): any;
}