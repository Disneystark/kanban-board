import {
  LIST_BACKLOG,
  LIST_FINISHED,
  LIST_IN_PROGRESS,
  LIST_READY,
} from "../const/listTypes";

export const mockTaskList = [
  {
    id: 1,
    name: "Sprint bugfix",
    description:
      "Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.",
    listType: LIST_BACKLOG,
  },
  {
    id: 2,
    name: "Shop page – performance issues",
    description: "Fix all the bugs",
    listType: LIST_READY,
  },
  {
    id: 3,
    name: "User page – performance issues",
    description: "Fix all the bugs",
    listType: LIST_IN_PROGRESS,
  },
  {
    id: 4,
    name: "Main page – performance issues",
    description: "Fix all the bugs",
    listType: LIST_FINISHED,
  },
];
