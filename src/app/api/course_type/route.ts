// import type { NextApiRequest, NextApiResponse } from 'next'
import { getCourses, createCourse } from '../controllers/courseController';
import { NextRequest } from "next/server";


// GET all courses
export async function GET() {
    return getCourses();
}

// Create new course
export async function POST(request: NextRequest) {
    return createCourse(request);
}


