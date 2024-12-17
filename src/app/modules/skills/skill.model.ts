import { Schema, model } from 'mongoose';
import { TSkill } from './skill.interface';

const skillSchema = new Schema<TSkill>(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: {
        values: ['Frontend', 'Backend', 'Database', 'Tools'],
      },
    },
    color: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const Skill = model<TSkill>('Skill', skillSchema);
