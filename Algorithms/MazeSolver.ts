const dir=[
    [-1,0],
    [1,0],
    [0,-1],
    [0,1],
];
function walk(maze: string[], wall: string,curr:Point, start: Point, end: Point,seen:boolean[][],path:Point[]):boolean{
    if(curr.y<0 || curr.y>=maze.length || curr.x<0 || curr.x>=maze[0].length){
        return false;
    }
    if(maze[curr.y][curr.x]===wall){
        return false;
    }
    if(seen[curr.y][curr.x]){
        return false;
    }
    if(curr.y ===end.y && curr.x===end.x){
        path.push(end);
        return true;
    }

    seen[curr.y][curr.x]=true;
    path.push(curr);

    for(let i=0; i<dir.length; i++){
        const [x,y]=dir[i];
        if(walk(maze, wall,{x:curr.x+x,y:curr.y+y}, start, end,seen,path)){
            return true;
        }
    }

    path.pop();
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  const path:Point[]=[];
  const seen:boolean[][]=[];
  
  for(let x=0; x<maze.length; x++){
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall,start, start, end,seen,path);
  return path;
}